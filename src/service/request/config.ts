let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://152.136.185.210:8000/'
  // BASE_NAME = 'test'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = '123'
  // BASE_NAME = 'test'
} else {
  BASE_URL = '123'
  // BASE_NAME = 'test'
}

export { TIME_OUT, BASE_URL }
