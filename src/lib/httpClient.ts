import axios from 'axios'

export const httpsClient = axios.create({
    baseURL: "https://localhost:3000",
    timeout: 30000
})