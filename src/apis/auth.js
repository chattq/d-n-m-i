import http from './http'

export const auth = {
  login(body) {
    return http.post(`/auth/login`, body)
  },
  getLogout() {
    return http.delete(`/auth/logout`)
  }
}
