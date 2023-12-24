import axios from 'axios'
import { apiAuth } from '../services'

const baseURL = 'https://yasley-api.vercel.app/'
// const baseURL = 'http://localhost:4002/'

export const apiUsingNow = axios.create({
  baseURL,
  timeout: 100000,
})

apiUsingNow.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('@Engercon:token')
    config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

apiUsingNow.interceptors.response.use(
  (response) => {
    return response
  },
  async function (error) {
    const originalRequest = error.config
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true
      const token = localStorage.getItem('@Engercon:refresh_token')
      apiAuth.refresh().then((res) => {
        apiUsingNow.defaults.headers.authorization = `Bearer ${token}`
        axios.defaults.headers.common.Authorization = `Bearer ${res.token}`
      })
      return apiUsingNow(originalRequest)
    }
    return Promise.reject(error)
  },
)
