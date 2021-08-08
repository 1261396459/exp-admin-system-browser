import axios from "axios";

// const apiHost = "http://120.79.168.124:30000";
const localHost = "http://127.0.0.1:30000";

export default axios.create({
  baseURL: localHost,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  },
  // withCredentials: true
});
