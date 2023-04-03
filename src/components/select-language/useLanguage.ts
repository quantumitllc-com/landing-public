import { useState } from 'react'
import { useRouter } from 'next/router'
import { SelectChangeEvent } from '@mui/material'

export const useLanguage = () => {
	const { push, query, asPath, locale, pathname } = useRouter()
	const [value, setValue] = useState(locale)

	const handleChange = (e: SelectChangeEvent<string>) => {
		push({ pathname, query }, asPath, {
			locale: e.target.value,
		})
		setValue(e.target.value)
	}

	return { value, handleChange }
}
