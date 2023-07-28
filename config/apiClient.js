import axios from "axios";
import { BASEURL } from "./BasicUrl/Url";

export default axios.create({
  baseURL: BASEURL.URL,
  headers: {
    "Content-type": "application/json"
  }
});