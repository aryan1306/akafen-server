import { __prod__ } from "./types";
import { Product } from "./entities/Product";
import { Users } from "./entities/Users";
import connectRedis from "connect-redis";
import "reflect-metadata";
import Express, { Request, Response } from "express";
import session, { SessionData } from "express-session";
import cors from "cors";
import { redis } from "./redis";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import path from "path";
import dotenv from "dotenv";
import { createConnection } from "typeorm";
import { Vendor } from "./entities/Vendor";

export interface Context {
	req: Request & { session: SessionData };
	res: Response;
}

const main = async () => {
	dotenv.config({ path: path.resolve(__dirname, "../.env") });
	const conn = await createConnection({
		type: "postgres",
		url: process.env.DATABASE_URL,
		logging: true,
		synchronize: false,
		migrations: [path.join(__dirname, "./migration/*")],
		entities: [Users, Vendor, Product],
	});
	conn.runMigrations();
	// Product.delete({});
	// Vendor.delete({});
	// Profile.delete({});
	const app = Express();

	const RedisStore = connectRedis(session);
	app.set("trust proxy", 1);
	app.use(
		cors({
			origin: "https://akafenflea.online",
			credentials: true,
		})
	);
	app.use(
		session({
			name: process.env.COOKIE_NAME!,
			store: new RedisStore({
				client: redis,
				disableTouch: true,
			}),
			cookie: {
				httpOnly: true,
				secure: __prod__,
				// sameSite: "lax",
				domain: __prod__ ? ".akafenflea.online" : undefined,
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
		context: ({ req, res }): Context => ({ req, res }),
	});

	apolloServer.applyMiddleware({
		app,
		cors: false,
	});

	app.listen(parseInt(process.env.PORT!), () => {
		console.log("server started on localhost:4000/graphql");
	});
};
main().catch((e) => console.error(e));
