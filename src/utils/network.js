import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const instance = axios.create({
  timeout: 5000,
  baseURL: '/'
})

instance.interceptors.request.use(config => {
  return config
})

instance.interceptors.response.use(config => {
  return config
})

export default instance
