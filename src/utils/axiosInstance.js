import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://backend.rch-capital-holding.com/api",
    withCredentials: true, 
});

export default axiosInstance;