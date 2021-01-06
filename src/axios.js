import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-4ab0f.cloudfunctions.net/api",
});

export default instance;

// http://localhost:5001/clone-4ab0f/us-central1/api
