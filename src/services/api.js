import axios from 'axios';

const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_HOST}`  // 'http://192.168.100.26:3000'
});

export default api;