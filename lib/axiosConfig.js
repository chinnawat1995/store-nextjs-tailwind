import axios from 'axios';
// import { API_URL } from 'config/constant';
//make an 'instance' of it
const instance = axios.create();

instance.defaults.headers.common['Content-Type'] = 'application/json';

export default instance;