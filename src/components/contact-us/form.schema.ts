import { object, string, type ObjectSchema } from 'yup'

export type FormTypes = {
	first_name: string
	last_name: string
	email: string
	phone_number: string
	service: string
}

export const defaultValues = {
	first_name: '',
	last_name: '',
	email: '',
	phone_number: '',
	service: false,
}

export const schema: ObjectSchema<FormTypes> = object().shape({
	email: string().email().nullable().required(),
	first_name: string().nullable().required(),
	last_name: string().nullable().required(),
	phone_number: string().nullable().required(),
	service: string().nullable().required(),
})
