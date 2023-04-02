import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://emt-lab-production.up.railway.app/api',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default instance;