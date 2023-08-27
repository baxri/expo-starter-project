import axios from 'axios';
import ms from 'ms';

import merge from 'lodash/merge';

import { getItToken } from 'Services/Store/session';

const request = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: ms('5s'),
  headers: {
    'Content-Type': 'application/json',
  },
});

request.interceptors.request.use((config: any) => {
  const token = getItToken();

  return merge({}, config, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
});

export default request;
