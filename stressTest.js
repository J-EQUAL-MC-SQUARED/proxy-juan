/* eslint-disable */
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 50,
  duration: '1m',
  ext: {
    loadimpact: {
      projectID: 3524850,
      distribution: {
        portlandDistribution: { loadZone: 'amazon:us:portland', percent: 100 },
      },
    },
  },
};

export default function () {
  http.get(
    `http://34.222.12.30/api/carousels/${Math.floor((Math.random() * 10000000) + 1)}`,
    {
      tags: { name: '34.222.12.30/api/carousels' }
    }
  );
  sleep(0.05);
}
