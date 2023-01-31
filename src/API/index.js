import mockRequests from './mock'

export const reqToken = () => {
  return mockRequests.get('/token')
}

export const postUmbrellaBorrow = (Params) => {
  return mockRequests.post('/UmbrellaBorrow',Params)

}