import axios from "axios";

const baseURL = 'http://10.0.2.2:8000/api'
const user = JSON.parse(localStorage.getItem('user') || '').access_token

const instance = axios.create({
    baseURL,
    headers: {
        Authorization :  `Bearer ${user}`
    }
})

export default instance