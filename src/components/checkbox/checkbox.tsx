import { Label } from './style'
import { useState } from 'react'
import { type Control, Controller } from 'react-hook-form'
import { type CheckboxProps, Checkbox as MuiCheckbox } from '@mui/material'

type ICheckbox = CheckboxProps & {
	label?: string
	name: string
	control: Control<any>
}

export const Checkbox = (props: ICheckbox) => {
	const [labelActive, setLabelActive] = useState(false)
	return (
		<Label
			control={
				<Controller
					name={props.name}
					control={props.control}
					render={({ field: controlProps }) => {
						const { value, ...rest } = controlProps
						return (
							<MuiCheckbox
								{...rest}
								value={value}
								checked={value}
								onChange={e => {
									controlProps.onChange(e.target.checked)
									setLabelActive(e.target.checked)
									if (props?.onChange) props?.onChange(e, e.target?.checked)
								}}
							/>
						)
					}}
				/>
			}
			label={props.label}
			isctive={String(labelActive)}
		/>
	)
}
