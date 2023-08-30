import { IProject, ITechnology } from '@/types/respones'
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

export const getProjects = async (locale = 'en') => {
	const { data } = await request('api/projects/', {
		headers: {
			'Accept-Language': locale,
		},
	})
	return data
}

export const getProject = async (id: string, locale = 'en') => {
	const { data }: { data: IProject } = await request(`api/project/${id}`, {
		headers: {
			'Accept-Language': locale,
		},
	})

	return data
}

export const getTechnologies = async (locale = 'en') => {
	const { data } = await request('api/technologies/', {
		headers: {
			'Accept-Language': locale,
		},
	})

	const newData = data.map((technology: ITechnology) => {
		const fourth = technology.languages.length > 12
		const fifth = technology.languages.length > 15

		return {
			...technology,
			listLanguages1: technology.languages.slice(0, fifth ? 4 : 3),
			listLanguages2: technology.languages.splice(
				fifth ? 4 : 3,
				fifth ? 8 : fourth ? 7 : technology.languages.length < 6 ? technology.languages.length : 6,
			),
			listLanguages3: technology.languages.splice(
				fifth ? 9 : 6,
				fifth
					? 13
					: fourth
					? 10
					: technology.languages.length < 9
					? technology.languages.length
					: 9,
			),
			listLanguages4: technology.languages.splice(
				fifth ? 14 : 9,
				fifth
					? 18
					: fourth
					? 13
					: technology.languages.length < 12
					? technology.languages.length
					: 12,
			),
		}
	})
	return newData
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

export const getAchievements = async (locale = 'en') => {
	const { data } = await request('api/achievements/', {
		headers: {
			'Accept-Language': locale,
		},
	})
	return data
}
