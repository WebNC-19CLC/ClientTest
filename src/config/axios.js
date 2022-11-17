import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://192.168.1.71:7255/api/",
});

export { axiosClient };
