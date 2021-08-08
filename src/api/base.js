import axios from "axios";

const apiHost = "http://120.79.168.124:40000";

export default axios.create({
  baseURL: apiHost,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  },
  // withCredentials: true
});
