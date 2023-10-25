import { Celebrity } from "./types";

export const parseCelebrity = (response: string) => {
    
    const responseArray = response.split('|');
    const name = responseArray[0];
    const description = responseArray[1];

    const celebrity: Celebrity = {
        name: name,
        description: description,
    }
    return JSON.stringify(celebrity);
}

export const parseCelebrityString = (response: string) => {
    const array = response.split('","');
    const name = array[0].replace('{"name":"', '');
    const descriptionPt1 = array[1].replace('description":"', '');
    const description = descriptionPt1.replace('"}', '');

    const celebrity: Celebrity = {
        name: name,
        description: description,
    };

    return celebrity;
}