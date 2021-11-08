import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://friendsocial.herokuapp.com/node-rest-api"
})