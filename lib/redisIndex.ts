import {connectToRedis, redisClient} from "./redis";
import {Repository} from "redis-om";
import {carSchema} from "./car";

async function createRedisIndex() {
    await connectToRedis();

    const repo = new Repository(carSchema, redisClient);
    await repo.createIndex();
}

export {createRedisIndex};