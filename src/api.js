import axios from 'axios';
import store from './store';

const server = axios.create({
  baseURL: 'http://localhost:8081',
  headers: {
    'Content-Type': 'application/json',
  }
})

export default server; 