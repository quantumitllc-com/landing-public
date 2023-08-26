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
	client: {
		id: number
		name: string
	}
	date: string
	id: number
	image: string
	in_home_page: boolean
	languages: ILanguage[]
	location: string
	project_images: {
		id: number
		image: string
		project: number
	}[]
	service: {
		dark_image: string
		id: number
		light_image: string
		text: string
		title: string
	}
	subtitle: string
	text: string
	title: string
	main_image: string
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
