import axios from 'axios'

const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

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
