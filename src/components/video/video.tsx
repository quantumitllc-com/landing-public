import { getVideo } from '@/pages/api'
import type { IVideo } from '@/types/respones'
import { IconPlay } from '@/assets/icons/play'
import { useBoolean } from '@/hooks/useBoolean'
import { useQuery } from '@tanstack/react-query'
import { IconShowreels } from '@/assets/icons/showreels'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { WrapPlay, ButtonPlay, WrapIconShowreels } from './style'

export const Video = () => {
	const { value, setTrue, setFalse } = useBoolean()
	const { data: dataVideo = { video_url: '' } } = useQuery<IVideo>({
		queryKey: [REACT_QUERY_KEYS.VIDEO],
		queryFn: getVideo,
	})

	return (
		<ButtonPlay>
			<WrapPlay>
				<IconPlay />
			</WrapPlay>
			<WrapIconShowreels>
				<IconShowreels />
			</WrapIconShowreels>
		</ButtonPlay>
	)
}
