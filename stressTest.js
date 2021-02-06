/* eslint-disable */
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '1m',
};

export default function () {
  http.get(`http://localhost:8080/api/carousels/${Math.floor((Math.random() * 10000000) + 1)}`);
  sleep(0.01);
}
