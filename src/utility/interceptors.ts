import axios from 'axios'

const accessToken = 'd6f1c8ab8e77556b43d068e844fe2c9b6bf08cc9'

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
