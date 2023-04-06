import { postFollow } from '@/pages/api'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import { notifySuccess } from '@/components/notification'
import { schema, defaultValues, type FormTypes } from './form.schema'

export const useFollow = () => {
	const form = useForm<FormTypes>({
		resolver: yupResolver(schema),
		mode: 'onChange',
		defaultValues,
	})

	const { mutate, isLoading } = useMutation((data: FormTypes) => postFollow<FormTypes>(data), {
		onSuccess: () => {
			form.reset(defaultValues)
			notifySuccess('Thanks')
		},
	})

	const onSubmit = (data: FormTypes) => mutate(data)

	return { form, onSubmit, isLoading }
}
