import Axios from 'axios';

const vinGroupApi = Axios.create({
    baseURL: process.env.VINGROUP_API_URL,
    timeout: 300000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Lang": this.$lang
    },
});

export default vinGroupApi;
