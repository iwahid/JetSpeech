import axios from 'axios';
import { parseCookies } from 'nookies';
import { SERVER_URL } from '../utils/config';

const cookies = parseCookies();

/* TODO: задокументировать наполнение запросов авторизационными данными */

const Axios = axios.create({
  baseURL: SERVER_URL,
  headers: {
    Authorization: 'Bearer ' + cookies?.token,
  },
});

export { Axios };
