import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL;

export const apiV1 = axios.create({
  baseURL: `${baseUrl}`
})
