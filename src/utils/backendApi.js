import Axios from 'axios';

const backendApi = Axios.create({
    baseURL: process.env.BACKEND_API_URL,
    timeout: 300000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Token': 'YASIz!safR*d21REwoPl',
    },
});

export default backendApi;
