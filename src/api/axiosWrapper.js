import axios from "axios";

const options = {
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    "Content-Type": "application/json"
  }
};

export default axios.create(options);
