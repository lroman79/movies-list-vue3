import axios from 'axios'

const baseURL = 'https://api.themoviedb.org/3'
const getToken = '74d142ff8fa0fd98cd623bae29ec338e'

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use(
  (config) => {
    const token = getToken
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

const apiRequest = async ({ method, url, data = {}, params = {} }) => {
  try {
    const config = {
      method,
      url,
      data,
      params,
    }

    const response = await apiClient(config)
    return response.data
  } catch (error) {
    console.error(`Error during ${method} request to ${url}:`, error)
    throw error
  }
}

export default apiRequest
