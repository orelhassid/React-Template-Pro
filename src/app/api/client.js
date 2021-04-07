import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 3000,
});

export default apiClient;
