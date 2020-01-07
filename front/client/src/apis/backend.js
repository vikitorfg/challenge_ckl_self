import axios from "axios";

export default axios.create({
  // baseURL: "https://ckl-challenge-victor.herokuapp.com/api/v1/"

  baseURL: "http://127.0.0.1:8000/api/v1/"
});
