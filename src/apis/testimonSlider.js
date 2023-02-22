import http from './http'

export const testimon = {
  inforUser() {
    return http.get(`/galleries`)
  }
}
