import axios from "axios";

const xHost = axios.create({
  baseURL: "http://localhost:3002/api",
  withCredentials: true, 
});

export default xHost;