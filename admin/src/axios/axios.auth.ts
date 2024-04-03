import axios from 'axios'

const instanceAuth = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  headers: {
    "Content-Type": "application/json",
  },
})

// Add a request interceptor
instanceAuth.interceptors.request.use(
  function (config: any) {
      // Do something before request is sent
      const token = JSON.parse(JSON.parse(localStorage.getItem('persist:auth') || '{}').auth).token
      config.headers = {
          authorization: token ? `Bearer ${token}` : null,
      };

      return config;
  },
  function (error) {
      // Do something with request error
      return Promise.reject(error);
  },
);

// Add a response interceptor
instanceAuth.interceptors.response.use(
  function (response: any) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error?.response?.data)
  },
)

export default instanceAuth
