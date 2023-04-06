import { object, string, type ObjectSchema } from 'yup'

export type FormTypes = {
	email: string
}

export const defaultValues = {
	email: '',
}

export const schema: ObjectSchema<FormTypes> = object().shape({
	email: string().email().nullable().required(),
})
