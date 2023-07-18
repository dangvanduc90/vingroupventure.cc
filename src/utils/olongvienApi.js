import Axios from 'axios';

const olongvienApi = Axios.create({
    baseURL: process.env.OLONGVIEN_API_URL,
    timeout: 300000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Token': 'YASIz!safR*d21REwoPl',
    },
});

export default olongvienApi;
