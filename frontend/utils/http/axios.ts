import axios from 'axios'

let http = axios.create({
  baseURL: 'http://127.0.0.1:5001',
  headers: {
    'Authorization': 'Bearer VCVRb99R4cCSw00Kv500HIKNIktDtKNTk5GkfNvF4rs'
  }
})

export {
  http
}