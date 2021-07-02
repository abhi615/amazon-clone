import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-challenge-7a646.cloudfunctions.net/api'
    // "apihttp://localhost:5001/challenge-4b2b2/us-central1/",
});

export default instance;
