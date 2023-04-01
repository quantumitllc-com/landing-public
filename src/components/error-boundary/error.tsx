import { type ReactNode } from 'react'
import { Button } from '@mui/material'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary as ClassBoundary } from 'react-error-boundary'

interface IError {
	children: ReactNode
}

export const ErrorBoundary = ({ children }: IError) => {
	return (
		<QueryErrorResetBoundary>
			{({ reset }) => (
				<ClassBoundary
					onReset={reset}
					fallbackRender={({ resetErrorBoundary }) => (
						<div>
							<div>
								<div>Something went wrong !</div>
								<Button variant='contained' onClick={resetErrorBoundary}>
									Try again
								</Button>
							</div>
						</div>
					)}
				>
					{children}
				</ClassBoundary>
			)}
		</QueryErrorResetBoundary>
	)
}
