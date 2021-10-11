import axios from 'axios';
import { parseCookies } from 'nookies';

const cookies = parseCookies();

/* TODO: задокументировать наполнение запросов авторизационными данными */
const Axios = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    Authorization: 'Bearer ' + cookies?.token,
  },
});

export { Axios };
