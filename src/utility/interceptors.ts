import axios from 'axios'

const accessToken = 'f37d55dc406c116f27dd72b4cb1aed3243be2e16'

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
