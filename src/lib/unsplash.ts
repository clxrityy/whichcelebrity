import { createApi } from "unsplash-js";

const imgApi = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY!,
});

export default imgApi;