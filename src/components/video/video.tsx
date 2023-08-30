import { forwardRef } from 'react'
import { getVideo } from '@/pages/api'
import Slide from '@mui/material/Slide'
import Dialog from '@mui/material/Dialog'
import type { IVideo } from '@/types/respones'
import { IconPlay } from '@/assets/icons/play'
import { useBoolean } from '@/hooks/useBoolean'
import { useQuery } from '@tanstack/react-query'
import { IconShowreels } from '@/assets/icons/showreels'
import { TransitionProps } from '@mui/material/transitions'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { WrapPlay, ButtonPlay, WrapIconShowreels } from './style'

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>
	},
	ref: React.Ref<unknown>,
) {
	return <Slide direction='up' ref={ref} {...props} />
})

export const Video = () => {
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
				onClose={setFalse}
				maxWidth={false}
				TransitionComponent={Transition}
				PaperProps={{
					style: {
						borderRadius: 0,
					},
				}}
				sx={theme => ({
					video: {
						objectFit: 'fill',
						maxWidth: '1000px',
						maxHeight: '800px',
						height: '60vh !important',
						width: 'calc(70vw - 64px) !important',
						[theme.breakpoints.down('sm')]: {
							height: '40vh !important',
							width: 'calc(100vw - 64px) !important',
						},
					},
				})}
			>
				<style jsx global>{`
					html,
					body {
						overflow-y: hidden;
					}
				`}</style>
				<video preload='preload' controls autoPlay>
					<source src={dataVideo.file_url} />
				</video>
			</Dialog>
		</>
	)
}
