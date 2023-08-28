import { forwardRef } from 'react'
import { getVideo } from '@/pages/api'
import Slide from '@mui/material/Slide'
import Dialog from '@mui/material/Dialog'
import type { IVideo } from '@/types/respones'
import { IconPlay } from '@/assets/icons/play'
import { useBoolean } from '@/hooks/useBoolean'
import { useTheme } from '@mui/material/styles'
import { useQuery } from '@tanstack/react-query'
import useMediaQuery from '@mui/material/useMediaQuery'
import { IconShowreels } from '@/assets/icons/showreels'
import { TransitionProps } from '@mui/material/transitions'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { WrapPlay, ButtonPlay, WrapVideo, WrapIconShowreels } from './style'

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>
	},
	ref: React.Ref<unknown>,
) {
	return <Slide direction='up' ref={ref} {...props} />
})

export const Video = () => {
	const theme = useTheme()
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

	const { value, setTrue, setFalse } = useBoolean()
	const { data: dataVideo = { file_url: '' } } = useQuery<IVideo>({
		queryKey: [REACT_QUERY_KEYS.VIDEO],
		queryFn: getVideo,
	})

	return (
		<>
			<ButtonPlay onClick={setTrue}>
				<WrapPlay>
					<IconPlay />
				</WrapPlay>
				<WrapIconShowreels>
					<IconShowreels />
				</WrapIconShowreels>
			</ButtonPlay>
			<Dialog
				open={value}
				maxWidth='md'
				onClose={setFalse}
				fullScreen={fullScreen}
				TransitionComponent={Transition}
				PaperProps={{
					style: {
						borderRadius: 0,
					},
				}}
			>
				<style jsx global>{`
					html,
					body {
						overflow-y: hidden;
					}
				`}</style>
				<WrapVideo>
					<video controls>
						<source src={dataVideo.file_url} />
					</video>
				</WrapVideo>
			</Dialog>
		</>
	)
}
