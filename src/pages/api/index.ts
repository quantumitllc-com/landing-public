import { request } from '@/utility/interceptors'

export const getVideo = async () => {
	const { data } = await request('video/')
	return data
}

export const getIntro = async () => {
	const { data } = await request('intro/')
	return data
}

export const getCompanies = async () => {
	const { data } = await request('companies/')
	return data
}

export const getServices = async () => {
	const { data } = await request('services/')
	return data
}

export const getAbout = async () => {
	const { data } = await request('about/')
	return data
}

export const getProjects = async () => {
	const { data } = await request('projects/')
	return data
}
