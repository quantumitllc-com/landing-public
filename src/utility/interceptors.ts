import axios from 'axios'

const accessToken = 'c32fdedfb97cb19edaa5f99616d03f881b667bd5'

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
