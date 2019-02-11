import axios from 'axios';

const server = axios.create({
    baseURL: 'http://localhost:8081'
})

export default server;