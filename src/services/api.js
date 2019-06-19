import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backender.herokuapp.com/',
})

export default api;