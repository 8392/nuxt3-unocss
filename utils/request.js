const BASE_URL = 'https://www.diweiyunlian.cn/api/official'

function httpRequest(queryOption) {
  const { method, data, url } = queryOption
  return new Promise((resolve, reject) => {
    const resOptions = {
      baseURL: BASE_URL,
      method,
      data,
      onRequest({ request, options }) {
        // Set the request headers
        // options.headers = options.headers || {}
        // options.headers.authorization = '...'
      },
      onRequestError() {
        // Handle the request errors
      },
      onResponse() {

      },
      onResponseError() {
        // Handle the response errors
      }
    }

    if (method === 'GET')
      resOptions.params = data

    if (method === 'POST' || method === 'PUT' || method === 'DELETE')
      resOptions.body = data

    useFetch(url, resOptions).then((res) => {
      const { code } = res.data.value
      if (code === 1)
        resolve(res.data.value)
      else
        reject(res)
    })
      .catch((error) => {
        reject(error)
      })
  })
}

export default httpRequest
