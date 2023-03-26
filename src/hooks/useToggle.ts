import { useReducer } from 'react'

const toggler = (currentValue: boolean, newValue: boolean) => {
	return typeof newValue === 'boolean' ? newValue : !currentValue
}

export const useToggle = (initialState = false) => {
	return useReducer(toggler, initialState)
}
