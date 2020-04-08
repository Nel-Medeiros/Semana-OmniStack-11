import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.12:3333'//Alterar dependendo de onde será executado o Expo.
});

export default api;