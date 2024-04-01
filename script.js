import http from "k6/http";
import { check, group, sleep } from "k6";
import { Counter, Rate, Trend } from "k6/metrics";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";

export const options = {
  // A number specifying the number of VUs to run concurrently.
  vus: 5,
  // // A string specifying the total duration of the test run.
  duration: '30s',
};

export default function() {
  const res =  http.get(`https://test.k6.io/flip_coin.php`);
  sleep(1);
}
