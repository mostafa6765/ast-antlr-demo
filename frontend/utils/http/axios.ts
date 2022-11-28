import axios from 'axios'

let http = axios.create({
  baseURL: process.env.BASE_URI || '',
  headers: {
    'Authorization': 'Bearer VCVRb99R4cCSw00Kv500HIKNIktDtKNTk5GkfNvF4rs'
  }
})

export {
  http
}