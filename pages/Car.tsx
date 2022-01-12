import {FormEvent} from "react";

export default function CarForm() {
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = new FormData(event.target as any);
        const formData = Object.fromEntries(form.entries());

        console.log("formData", formData);

        const res = await fetch("/api/createCar", {
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        });

        const result = await res.json();
        console.log(result);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type={"text"} name={"make"} placeholder={"make"}/>
            <input type={"text"} name={"model"} placeholder={"model"}/>
            <input type={"text"} name={"image"} placeholder={"image"}/>
            <input type={"text"} name={"description"} placeholder={"description"}/>

            <button type={"submit"}>create car</button>
        </form>
    );
}
