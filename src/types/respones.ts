export interface ILanguage {
	id: number
	name: string
	image: string
}

export interface IService {
	dark_image: string
	id: number
	light_image: string
	text: string
	title: string
}

export interface ICompany {
	id: number
	image: string
}

export interface IIntro {
	subtitle: string
	title: string
}

export interface IVideo {
	id: number
	file: string
	file_url: string
}

export interface IProject {
	id: number
	title: string
	main_image: string
	description: string
	seo_keywords: string[]
	languages: ILanguage[]
	contents: {
		content: string
		id: number
		image: string
		is_right_position: boolean
		project: number
	}[]
}

export interface ITechnology {
	id: number
	name: string
	text: string
	languages: ILanguage[]
	listLanguages1: ILanguage[]
	listLanguages2: ILanguage[]
	listLanguages3: ILanguage[]
	listLanguages4: ILanguage[]
}

export interface ITestimonial {
	country: string
	first_name: string
	id: number
	image: string
	last_name: string
	text: string
	company_name: string
}
