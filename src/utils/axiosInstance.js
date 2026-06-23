import axios from "axios";

const axiosInstance = axios.create({
    baseURL:
        process.env.NEXT_PUBLIC_API_URL ||
        (process.env.NODE_ENV === "development"
            ? "http://localhost:5000/api"
            : "https://backend.brain-capital-asset.com/api"),
    withCredentials: true,
    timeout: 15000,
});

export default axiosInstance;
