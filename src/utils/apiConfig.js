import axios from 'axios';

export const Stand = 'http://localhost:8000';

export const http = axios.create({
    baseURL: Stand,
    timeout: 5000,
    headers: {'Content-Type':'application/json'},
});