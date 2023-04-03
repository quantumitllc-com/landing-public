import { useForm } from 'react-hook-form'
import { postContact } from '@/pages/api'
import { useBoolean } from '@/hooks/useBoolean'
import { useMutation } from '@tanstack/react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema, defaultValues, type FormTypes } from './form.schema'

export const useContact = () => {
	const { value, setTrue, setFalse } = useBoolean()

	const form = useForm<FormTypes>({
		resolver: yupResolver(schema),
		mode: 'onChange',
		defaultValues,
	})

	const { mutate, isLoading } = useMutation((data: FormTypes) => postContact<FormTypes>(data))

	const onSubmit = (data: FormTypes) => mutate(data)

	return { form, value, setTrue, setFalse, onSubmit }
}
