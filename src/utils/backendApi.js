import Axios from 'axios';
import https from 'https';

const backendApi = Axios.create({
    baseURL: process.env.BACKEND_API_URL,
    timeout: 300000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Token': 'YASIz!safR*d21REwoPl',
    },
    httpsAgent: new https.Agent({  
        rejectUnauthorized: false
    })
});

export default backendApi;
