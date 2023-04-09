import { getMonth } from '@/utility/getMonth'
import { request } from '@/utility/interceptors'

export const getVideo = async () => {
	const { data } = await request('api/video/')
	return data
}

export const getIntro = async (locale = 'en') => {
	const { data } = await request('api/intro/', {
		headers: {
			'Accept-Language': locale,
		},
	})
	return data
}

export const getCompanies = async (locale = 'en') => {
	const { data } = await request('api/companies/', {
		headers: {
			'Accept-Language': locale,
		},
	})

	return data
}

export const getServices = async (locale = 'en') => {
	const { data } = await request('api/services/', {
		headers: {
			'Accept-Language': locale,
		},
	})
	return data
}

export const getAbout = async (locale = 'en') => {
	const { data } = await request('api/about/', {
		headers: {
			'Accept-Language': locale,
		},
	})
	return data
}

export const getProjects = async (locale = 'en') => {
	const { data } = await request('api/projects/', {
		headers: {
			'Accept-Language': locale,
		},
	})
	return data
}

export const getProject = async (id: string, locale = 'en') => {
	const { data } = await request(`api/project/${id}`, {
		headers: {
			'Accept-Language': locale,
		},
	})
	const d = new Date(data?.date as string)
	const date = `${getMonth(d.getMonth(), locale)} ${d.getDate()},${d.getFullYear()}`

	return { ...data, date }
}

export const getTechnologies = async (locale = 'en') => {
	const { data } = await request('api/technologies/', {
		headers: {
			'Accept-Language': locale,
		},
	})
	return data
}

export const getTestimonials = async (locale = 'en') => {
	const { data } = await request('api/testimonials/', {
		headers: {
			'Accept-Language': locale,
		},
	})
	return data
}

export const getContactInformation = async (locale = 'en') => {
	const { data } = await request('api/contactinformation/', {
		headers: {
			'Accept-Language': locale,
		},
	})
	return data
}

export const postContact = async <T>(data: T) => {
	const res = await request.post('api/contact/', data)
	return res
}

export const postFollow = async <T>(data: T) => {
	const res = await request.post('api/email/', data)
	return res
}
