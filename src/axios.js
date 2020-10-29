import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/galaxy-79390/us-central1/api'//api (cloud function)
});

export default instance;