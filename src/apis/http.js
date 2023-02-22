import axios from 'axios'

class Http {
  constructor() {
    const accessToken = localStorage.getItem('accessToken')
    this.instance = axios.create({
      baseURL: 'https://test-react.agiletech.vn',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    })
  }
}

const http = new Http().instance

export default http
