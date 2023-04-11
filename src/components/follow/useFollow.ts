import { postFollow } from '@/pages/api'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema, defaultValues, type FormTypes } from './form.schema'
import { notifyError, notifySuccess } from '@/components/notification'

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
		onError(error: any) {
			notifyError(error.response.data.email[0])
		},
	})

	const onSubmit = (data: FormTypes) => mutate(data)

	return { form, onSubmit, isLoading }
}
