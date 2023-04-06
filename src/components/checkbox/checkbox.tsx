import { Label } from './style'
import { type Control, Controller } from 'react-hook-form'
import { type CheckboxProps, Checkbox as MuiCheckbox } from '@mui/material'

type ICheckbox = CheckboxProps & {
	label?: string
	name: string
	control: Control<any>
}

export const Checkbox = (props: ICheckbox) => {
	return (
		<Controller
			name={props.name}
			control={props.control}
			render={({ field: controlProps }) => {
				const { value, ...rest } = controlProps
				return (
					<Label
						label={props.label}
						isctive={String(value)}
						control={
							<MuiCheckbox
								{...rest}
								value={value}
								checked={value}
								onChange={e => {
									controlProps.onChange(e.target.checked)
								}}
							/>
						}
					/>
				)
			}}
		/>
	)
}
