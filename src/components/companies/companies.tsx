import { getCompanies } from '@/pages/api'
import { useQuery } from '@tanstack/react-query'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import Image from 'next/image'

export const Companies = () => {
	// const { data = [] } = useQuery({ queryKey: [REACT_QUERY_KEYS.COMPANIES], queryFn: getCompanies })
	return (
		<div>
			{/* {data.map((company: any) => (
				<Image fill key={company?.id} src={company?.image} alt='company' />
			))} */}
		</div>
	)
}
