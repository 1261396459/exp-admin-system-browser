import axios from "axios";

const apiHost = "http://127.0.0.1:3000";

export default axios.create({
  baseURL: apiHost,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  },
  // withCredentials: true
});
