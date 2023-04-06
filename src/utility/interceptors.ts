import axios from 'axios'

const accessToken = '32ef81a2332016859e0b35c0c80fef85503c5acf'

const baseURL = 'https://zmlsoft.com/api'

const request = axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Token ${accessToken}`,
	},
})

request.interceptors.request.use(async config => {
	return config
})

export { request }
