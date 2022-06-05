import axios from 'axios';

const url = 'http://localhost:5000/api/v1';

const fetch = axios.create({
  baseURL: url,
});

export default fetch;
