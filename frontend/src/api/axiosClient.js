import axios from "axios";

const xHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3002/api",
  withCredentials: true, 
});

export default xHost;