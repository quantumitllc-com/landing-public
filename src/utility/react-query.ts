import { QueryCache, MutationCache, type QueryClientConfig } from '@tanstack/react-query'

const mutationCache = new MutationCache({
	onError(error: any) {
		console.log(error)
	},
})

const queryCache = new QueryCache({
	onError: (error: any) => {
		console.log(error)
	},
})

export const queryClientConfig: QueryClientConfig = {
	queryCache,
	mutationCache,
	defaultOptions: {
		queries: {
			staleTime: Infinity,
			useErrorBoundary: true,
			refetchOnWindowFocus: false,
			retry(failureCount, error: any) {
				if (error.statusCode === 404) return false
				if (failureCount < 1) return true
				return false
			},
		},
	},
}
