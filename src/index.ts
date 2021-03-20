import connectRedis from "connect-redis";
import "reflect-metadata";
import { prisma } from "./Prisma";
import Express, { Request, Response } from "express";
import session, { SessionData } from "express-session";
import cors from "cors";
import { redis } from "./redis";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import path from "path";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

export interface Context {
	prisma: PrismaClient;
	req: Request & { session: SessionData };
	res: Response;
}

const main = async () => {
	dotenv.config({ path: path.resolve(__dirname, "../.env") });
	prisma.$on("query", (e) => {
		console.log("Query: " + e.query);
		console.log("Duration: " + e.duration + "ms");
	});
	const app = Express();

	const RedisStore = connectRedis(session);
	app.set("trust proxy", 1);
	app.use(
		cors({
			origin: [
				"http://localhost:3000",
				"http://localhost",
				"capacitor://localhost",
			],
			credentials: true,
		})
	);
	app.use(
		session({
			name: "qid",
			store: new RedisStore({
				client: redis,
				disableTouch: true,
			}),
			cookie: {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				// sameSite: "lax",
				domain:
					process.env.NODE_ENV === "production"
						? ".api-save-more.me"
						: undefined,
				maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
			},
			saveUninitialized: false,
			secret: process.env.SECRET!,
			resave: false,
		})
	);

	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [path.resolve(__dirname, "resolvers/**/*.*s")],
			validate: false,
		}),
		context: ({ req, res }): Context => ({ req, res, prisma }),
	});

	apolloServer.applyMiddleware({
		app,
		cors: false,
	});

	app.listen(parseInt(process.env.PORT!), () => {
		console.log("server started on localhost:4000/graphql");
	});
};
main()
	.catch((e) => console.error(e))
	.finally(async () => {
		await prisma.$disconnect();
	});
