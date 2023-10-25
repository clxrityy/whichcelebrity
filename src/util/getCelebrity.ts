import { parseCelebrity } from "./parseCelebrity";
import { Celebrity } from "./types";

export const getCelebrity = async (id: string) => {
    try {
        const res = await fetch(`/api/result/${id}`, {
            method: 'GET',
        });

        if (!res.ok) {
            const error = await res.text();
            throw new Error(error);
        }
        const data: string = await res.json().then(res => res);
        return data;
    } catch (err) {
        console.log(err);
    }
}