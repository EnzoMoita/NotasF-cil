import axios from "axios";

export const api = axios.create({
    baseURL: "https://notas-back.vercel.app/"
});

