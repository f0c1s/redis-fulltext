import {Entity, EntityCreationData, Repository, Schema} from "redis-om";
import {redisClient, connectToRedis} from "./redis";

class CarEntity extends Entity {
}

let carSchema = new Schema(
    CarEntity,
    {
        make: {type: "string"},
        model: {type: "string"},
        image: {type: "string"},
        description: {type: "string", textSearch: true},
    },
    {
        dataStructure: "JSON"
    }
);

async function createCar(data: EntityCreationData | undefined): Promise<string> {
    await connectToRedis();
    const repo = new Repository(carSchema, redisClient);

    const car = repo.createEntity(data);

    const id = await repo.save(car);

    return id;
}

async function searchCars(query: string) {
    await connectToRedis();

    const repo = new Repository(carSchema, redisClient);
    const cars = await repo.search()
        .where("make").eq(query)
        .or("model").eq(query)
        .or("description").matches(query)
        .return.all();
    return cars;
}

export {CarEntity, createCar, carSchema, searchCars};
