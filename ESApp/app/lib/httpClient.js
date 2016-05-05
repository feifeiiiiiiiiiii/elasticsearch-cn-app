const HttpClient = {
  getList: (path) => new Promise((resolve, reject) => {
    fetch(path, {
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => {
      response.json().then(json => {
        resolve({response, json})
      })
    })
    .catch(error => {
      reject(error)
    })
  }),

  get: (path) => new Promise((resolve, reject) => {
    fetch(path, {
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
       resolve(response)
    })
    .catch(error => {
      reject(error)
    })
  }),

  put: (path, payload) => new Promise((resolve, reject) => {
    fetch(path, {
      method: 'put',
      body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(response => {
       resolve(response)
    })
    .catch(error => {
      reject(error)
    })
  }),
  post: (path, payload) => new Promise((resolve, reject) => {
    fetch(path, {
      method: 'post',
      body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(response => {
       resolve(response)
    })
    .catch(error => {
      reject(error)
    })
  }),
  delete: (path) => new Promise((resolve, reject) => {
    fetch(path, {
      method: 'delete',
    })
    .then(response => {
       resolve(response)
    })
    .catch(error => {
      reject(error)
    })
  }),

};

export default HttpClient;
