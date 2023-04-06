import { useForm } from 'react-hook-form'
import { useBoolean } from '@/hooks/useBoolean'
import { yupResolver } from '@hookform/resolvers/yup'
import { getServices, postContact } from '@/pages/api'
import { useQuery, useMutation } from '@tanstack/react-query'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { schema, defaultValues, type FormTypes } from './form.schema'

export const useContact = () => {
	const { value, setTrue, setFalse } = useBoolean()

	const { data: dataService } = useQuery({
		queryKey: [REACT_QUERY_KEYS.SERVICES],
		queryFn: getServices,
	})

	const form = useForm<FormTypes>({
		resolver: yupResolver(schema),
		mode: 'onChange',
		defaultValues,
	})

	const { mutate, isLoading } = useMutation((data: FormTypes) => postContact<FormTypes>(data))

	const onSubmit = ({
		email,
		first_name,
		last_name,
		phone_number,
		service,
		...rest
	}: FormTypes) => {
		const services = Object.entries(rest)
			.filter(([_, value]) => value)
			.map(([key, _]) => Number(key.replace('service_', '')))

		const newData: FormTypes = {
			email,
			last_name,
			first_name,
			phone_number,
			service: services,
		}
		mutate(newData)
	}

	return { form, value, setTrue, setFalse, onSubmit, isLoading, dataService }
}
