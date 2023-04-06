import { toast } from 'react-toastify'

export const notifySuccess = (text: string) => {
	toast.success(text, {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		progressClassName: 'toastProgress',
	})
}

export const notifyError = (text: string) => {
	toast.error(text, {
		position: 'top-right',
		autoClose: 10000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		progressClassName: 'toastProgress',
	})
}

export const notifyInfo = (text: string) => {
	toast.info(text, {
		position: 'top-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		progressClassName: 'toastProgress',
	})
}

export const notifyWarning = (text: string, toastId: string) => {
	toast.warning(text, {
		draggable: true,
		autoClose: false,
		theme: 'colored',
		position: 'top-right',
		hideProgressBar: true,
		toastId,
	})
}
