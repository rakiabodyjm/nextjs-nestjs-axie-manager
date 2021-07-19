import axios from "axios";

export default function axiosDefaults() {
  axios.defaults.baseURL = `${process.env.HOST}:${process.env.PORT}`;
}
