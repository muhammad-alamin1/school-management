import axios from "axios";
import Cookies from "universal-cookie";

// token
const cookies = new Cookies();
const token = cookies.get("access_token");

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  headers: { Authorization: `Bearer ${token}` },
});

export default axiosInstance;
