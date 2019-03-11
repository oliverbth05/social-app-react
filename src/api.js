import axios from 'axios';
import store from './store';

const server = axios.create({
  baseURL: 'https://angular-oliverbth05.c9users.io:8081',
  headers: {
    'Content-Type': 'application/json',
  }
})

export default server; 