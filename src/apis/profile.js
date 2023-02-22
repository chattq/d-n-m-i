import http from './http'

export const profile = {
  tags() {
    return http.get(`/posts/tags`)
  },
  post() {
    return http.get('/posts')
  },
  createPost(body) {
    return http.post('/posts', body)
  },
  deletePost(id) {
    return http.delete(`posts/${id}`)
  },
  editPost(body) {
    return http.patch(`posts/${body.id}`, body)
  }
}
