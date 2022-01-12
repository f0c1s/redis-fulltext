import {useState} from "react";

type Car = {
    make: string;
    model: string;
    image: string;
    description: string;
    entityId: string;
}

export default function Search() {
    const [cars, setCars] = useState([] as Car[]);

    async function search(query: string) {
        if (query.length > 2) {
            const params = new URLSearchParams({query});
            const res = await fetch(`/api/searchCars?${params}`);
            const result = await res.json();
            console.log(result);
            setCars(result['cars']);
        }
    }

    return (
        <div>
            <input type={"text"} onChange={(e) => search(e.target.value)} placeholder={"search"}/>
            {
                cars.map((hit: Car) =>
                    <div key={hit.entityId}>
                        {hit.make} - {hit.model} - {hit.image} - {hit.description}
                    </div>
                )
            }
        </div>
    );
}