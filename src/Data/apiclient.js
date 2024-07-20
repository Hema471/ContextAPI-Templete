import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    withCredentials: true,
    headers: {
      "Content-type": "application/json", 
    },
});
  