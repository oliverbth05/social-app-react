import axios from 'axios';

const server = axios.create({
    baseURL: 'https://angular-oliverbth05.c9users.io:8081'
})

export default server;