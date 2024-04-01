import http from 'k6/http';
import { sleep } from 'k6';

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
