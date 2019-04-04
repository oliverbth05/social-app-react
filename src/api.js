import axios from 'axios';
import store from './store';

const server = axios.create({
  baseURL: 'https://rag-app-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  }
})
export default server;