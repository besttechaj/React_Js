import axios from 'axios';
// Making all other request by prefix them with below link because it is common for all
const instance = axios.create({ baseURL: 'https://api.themoviedb.org/3/' });

export default instance;
