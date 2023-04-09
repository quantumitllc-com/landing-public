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

export interface IAbout {
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
	video: string
	video_url: string
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
	project_images: {}[]
	service: {
		dark_image: string
		id: 1
		light_image: string
		text: string
		title: string
	}
	subtitle: string
	text: string
	title: string
}

export interface ITechnology {
	id: number
	name: string
	text: string
	languages: ILanguage[]
}

export interface ITestimonial {
	first_name: string
	id: 1
	image: string
	last_name: string
	text: string
}

export interface IContactInformation {
	id: number
	email: string
	phone_number: string
	facebook: string | null
	instagram: string | null
	linkedin: string | null
	telegram: string | null
}
