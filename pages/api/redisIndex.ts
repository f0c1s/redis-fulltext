import {createRedisIndex} from "../../lib/redisIndex";

export default async function handler(req: any, res: any) {
    await createRedisIndex();
    res.status(200).send('ok');
}
