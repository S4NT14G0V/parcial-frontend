const API_BASE_URL = 'http://localhost:8080/api';

export const apiConfigV1 = {
  baseUrl: API_BASE_URL,
  headers: {
    'Accept': 'application/vnd.demo.v1+json',
    'Content-Type': 'application/json'
  }
};

export const apiConfigV2 = {
  baseUrl: API_BASE_URL,
  headers: {
    'Accept': 'application/vnd.demo.v2+json',
    'Content-Type': 'application/json'
  }
};
