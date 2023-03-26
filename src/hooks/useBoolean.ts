import { useState, useCallback, type Dispatch, type SetStateAction } from 'react'

interface UseBooleanOutput {
	value: boolean
	setTrue: () => void
	setFalse: () => void
	toggle: () => void
	setValue: Dispatch<SetStateAction<boolean>>
}

export const useBoolean = (defaultValue?: boolean): UseBooleanOutput => {
	const [value, setValue] = useState(!!defaultValue)

	const setTrue = useCallback(() => {
		setValue(true)
	}, [])
	const setFalse = useCallback(() => {
		setValue(false)
	}, [])
	const toggle = useCallback(() => {
		setValue(x => !x)
	}, [])

	return { value, setValue, setTrue, setFalse, toggle }
}
