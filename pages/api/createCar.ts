import {createCar} from "../../lib/car";

export default async function handler(req: any, res: any) {
    console.log("req.body", req.body);
    const id = await createCar(req.body);
    res.status(200).json({id});
}
