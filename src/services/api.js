import axios from 'axios';

const api = axios.create({
    baseURL:'http://192.168.145.158:3330',
})

export default api;