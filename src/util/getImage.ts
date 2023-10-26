export const getImage = async (name: string) => {
    try {
        const res = await fetch(`/api/result/image/${name}`, {
            method: 'GET',
        });

        if (!res.ok) {
            const error = await res.text();
            throw new Error(error);
        }
        const data: string = await res.json().then(res => res);
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
}