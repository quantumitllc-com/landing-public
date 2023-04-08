import { request } from '@/utility/interceptors'

export const getVideo = async () => {
	const { data } = await request('video/')
	return data
}

export const getIntro = async (locale = 'en') => {
	const { data } = await request('intro/', {
		headers: {
			'Accept-Language': locale,
		},
	})
	return data
}

export const getCompanies = async (locale = 'en') => {
	const { data } = await request('companies/', {
		headers: {
			'Accept-Language': locale,
		},
	})

	return data
}

export const getServices = async (locale = 'en') => {
	const { data } = await request('services/', {
		headers: {
			'Accept-Language': locale,
		},
	})
	return data
}

export const getAbout = async (locale = 'en') => {
	const { data } = await request('about/', {
		headers: {
			'Accept-Language': locale,
		},
	})
	return data
}

export const getProjects = async (locale = 'en') => {
	const { data } = await request('projects/', {
		headers: {
			'Accept-Language': locale,
		},
	})
	return data
}

export const getProject = async (id: string, locale = 'en') => {
	const { data } = await request(`project/${id}`, {
		headers: {
			'Accept-Language': locale,
		},
	})
	return data
}

export const getTechnologies = async (locale = 'en') => {
	const { data } = await request('technologies/', {
		headers: {
			'Accept-Language': locale,
		},
	})
	return data
}

export const getTestimonials = async (locale = 'en') => {
	const { data } = await request('testimonials/', {
		headers: {
			'Accept-Language': locale,
		},
	})
	return data
}

export const getContactInformation = async (locale = 'en') => {
	const { data } = await request('contactinformation/', {
		headers: {
			'Accept-Language': locale,
		},
	})
	return data
}

export const postContact = async <T>(data: T) => {
	const res = await request.post('contact/', data)
	return res
}

export const postFollow = async <T>(data: T) => {
	const res = await request.post('email/', data)
	return res
}
