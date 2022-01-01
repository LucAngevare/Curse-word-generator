const axios = require("axios");

const api = axios.create({
    baseURL: "http://127.0.0.1:5000"
})

export const getCurse = () => api.get("/retrieve");
export const insertCurse = (words) => api.post(`/give_curse?curseWord=${words}`);
export const getAllCurses = () => api.get("/retrieve/all");

const APIs = {
    getCurse,
    insertCurse,
    getAllCurses
}

export default APIs