import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import type { Control } from 'react-hook-form'
import type { TextFieldProps } from '@mui/material'

type CustomTextFieldProps = TextFieldProps & {
	name: string
	control: Control<any>
}

export const Input = (props: CustomTextFieldProps) => {
	return (
		<Controller
			name={props.name}
			control={props.control}
			render={({ field, formState: { errors } }) => {
				return (
					<TextField
						{...props}
						{...field}
						error={!!errors[props.name]}
						helperText={errors[props.name] ? (errors[props.name]?.message as string) : ''}
					/>
				)
			}}
		/>
	)
}
