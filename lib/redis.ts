import {Client} from 'redis-om';

const redisClient = new Client();

async function connectToRedis() {
    if (!redisClient.isOpen()) {
        await redisClient.open(process.env.REDIS_HOST);
    }
}

export {connectToRedis, redisClient};
