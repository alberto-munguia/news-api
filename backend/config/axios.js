const axios = require('axios')

axios.defaults.baseURL = 'https://newsapi.org/v2'
axios.defaults.headers.common['X-Api-Key'] = process.env.NEWS_API_KEY

module.exports = axios