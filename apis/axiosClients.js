import axios from "axios"
import { API_URL } from "./constants"

export const createApiClient = (defaultConfig = {}) => {
  const instance = axios.create(defaultConfig)

  instance.interceptors.response.use(
    (response) => {
      return response.data
    },
    (error) => {
      // error case handle
      return Promise.reject(error)
    }
  )

  return instance
}

export const apiClient = createApiClient({
  baseURL: API_URL,
})

export const request = async (config) => {
  const mergedHeaders = {
    'Content-Type': 'application/json',
    ...config.headers,
  }
  
  try {
    const data = await apiClient.request({
      ...config,
      headers: mergedHeaders,
    })
    return data
  } catch (err) {
    return Promise.reject(err)
  }
}