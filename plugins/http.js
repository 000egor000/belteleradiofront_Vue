import axios from 'axios'

export const HTTP = axios.create({
	baseURL: process.env.NODE_ENV === 'production' ? 'https://www.tvr.by/' : 'http://localhost:8080/',
})
