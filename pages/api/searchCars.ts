import {searchCars} from "../../lib/car";

export default async function handler(req: any, res: any) {
    const {query} = req.query;
    console.log(req.query)
    const cars = await searchCars(query);
    res.status(200).json({cars});
}
