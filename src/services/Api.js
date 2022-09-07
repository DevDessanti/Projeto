import Axios from "axios";

Axios.defaults.headers.get["Content-Type"] = "application/json";
Axios.defaults.headers.get["Accept"] = "application/json";

const PROJETO  = Axios.create({
    baseURL: "http://localhost:4000/"
});

export {PROJETO};