import Redis from "ioredis";
import { __prod__ } from "./types";
export const redis = new Redis(process.env.REDIS_URL!);
