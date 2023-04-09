import Link from 'next/link'

export const IconLogoVerticalMobile = () => {
	return (
		<Link href='/' style={{ display: 'flex', alignItems: 'center' }}>
			<svg
				width='176'
				height='31'
				viewBox='0 0 176 31'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle cx='15.3577' cy='15.3594' r='9.6761' stroke='#091F2C' strokeWidth='2.15024' />
				<path
					d='M28.7295 22.9167C27.4152 25.2419 25.5173 27.1841 23.223 28.5517L22.0698 26.6171C24.0277 25.4501 25.6473 23.7926 26.7689 21.8084L28.7295 22.9167Z'
					fill='#091F2C'
				/>
				<circle cx='15.3593' cy='15.3589' r='3.83972' fill='#1AD980' />
				<path
					d='M36.8532 18.7523C36.187 18.7523 35.5994 18.508 35.0903 18.0192C34.6016 17.5102 34.3573 16.9211 34.3573 16.252V15.0041C34.3573 14.3379 34.6016 13.7503 35.0903 13.2412C35.5994 12.7525 36.187 12.5081 36.8532 12.5081H39.144C39.8102 12.5081 40.3993 12.7525 40.9113 13.2412C41.3971 13.7503 41.64 14.3379 41.64 15.0041V16.252C41.64 16.9211 41.3971 17.5102 40.9113 18.0192C40.7658 18.1618 40.6102 18.284 40.4444 18.3858L40.7324 19.241L39.7506 19.577L39.4582 18.7305C39.3564 18.745 39.2517 18.7523 39.144 18.7523H36.8532ZM35.6052 15.0041V16.252C35.6052 16.5982 35.7274 16.8935 35.9718 17.1378C36.2161 17.3793 36.5099 17.5 36.8532 17.5H39.0393L38.7382 16.6229L39.7244 16.2869L40.0167 17.1465C40.2669 16.8993 40.392 16.6011 40.392 16.252V15.0041C40.392 14.6608 40.2698 14.367 40.0255 14.1226C39.7811 13.8783 39.4873 13.7561 39.144 13.7561H36.8532C36.5099 13.7561 36.2161 13.8783 35.9718 14.1226C35.7274 14.367 35.6052 14.6608 35.6052 15.0041ZM45.013 18.7523C44.3468 18.7523 43.7592 18.508 43.2501 18.0192C42.7614 17.5102 42.517 16.9225 42.517 16.2564V12.5081H43.765V16.2564C43.765 16.5996 43.8872 16.8935 44.1315 17.1378C44.3759 17.3822 44.6697 17.5044 45.013 17.5044H47.3038C47.6471 17.5044 47.9409 17.3822 48.1853 17.1378C48.4296 16.8935 48.5518 16.5996 48.5518 16.2564V12.5081H49.7998V16.2564C49.7998 16.9225 49.5569 17.5102 49.0711 18.0192C48.5591 18.508 47.97 18.7523 47.3038 18.7523H45.013ZM51.3095 18.7523H49.8914L53.2513 12.5081H54.5604L57.9203 18.7523H56.5021L53.9058 13.9306L51.3095 18.7523ZM60.041 14.0004V18.7523H58.793V12.5081H60.3071L65.1419 17.2644V12.5081H66.3899V18.7523H64.8757L60.041 14.0004ZM74.2399 12.5081V13.7561H71.325V18.7523H70.0771V13.7561H67.2669V12.5081H74.2399ZM77.6085 18.7523C76.9423 18.7523 76.3547 18.508 75.8456 18.0192C75.3569 17.5102 75.1126 16.9225 75.1126 16.2564V12.5081H76.3605V16.2564C76.3605 16.5996 76.4827 16.8935 76.7271 17.1378C76.9714 17.3822 77.2652 17.5044 77.6085 17.5044H79.8994C80.2426 17.5044 80.5364 17.3822 80.7808 17.1378C81.0251 16.8935 81.1473 16.5996 81.1473 16.2564V12.5081H82.3953V16.2564C82.3953 16.9225 82.1524 17.5102 81.6666 18.0192C81.1546 18.508 80.5655 18.7523 79.8994 18.7523H77.6085ZM84.5203 14.2143V18.7523H83.2724V12.4034H84.6251L87.8497 16.2258L91.0743 12.4034H92.427V18.7523H91.1791V14.2143L87.8497 18.1589L84.5203 14.2143ZM96.1273 12.5081H97.3753V18.7523H96.1273V12.5081ZM105.221 12.5081V13.7561H102.306V18.7523H101.058V13.7561H98.248V12.5081H105.221ZM109.563 15.7808C109.362 15.6091 109.205 15.4011 109.091 15.1568C108.978 14.9095 108.921 14.6506 108.921 14.3801C108.921 14.0368 109.006 13.7241 109.174 13.4419C109.343 13.1568 109.568 12.9299 109.851 12.7612C110.136 12.5925 110.45 12.5081 110.793 12.5081H115.994V13.7561H110.793C110.621 13.7561 110.475 13.8172 110.352 13.9394C110.23 14.0615 110.169 14.2084 110.169 14.3801C110.169 14.5517 110.236 14.7015 110.37 14.8295C110.475 14.9139 110.608 14.9662 110.771 14.9866C110.934 15.0041 111.116 15.0128 111.317 15.0128C111.352 15.0128 111.387 15.0128 111.421 15.0128H111.426C111.915 15.0215 112.403 15.023 112.892 15.0171H113.036C113.274 15.0142 113.512 15.0099 113.747 15.0041C113.829 15.0041 113.912 15.0026 113.996 14.9997C114.191 14.9939 114.396 15.0026 114.611 15.0259C114.829 15.0491 115.046 15.1117 115.261 15.2135C115.8 15.4899 116.131 15.9277 116.256 16.5269C116.309 16.8091 116.3 17.0869 116.23 17.3604C116.154 17.6513 116.016 17.9087 115.816 18.1327C115.635 18.3305 115.426 18.4832 115.187 18.5909C114.949 18.6985 114.698 18.7523 114.437 18.7523H109.131V17.5044H114.437C114.605 17.5044 114.755 17.436 114.886 17.2993C115.02 17.148 115.068 16.9691 115.03 16.7626C114.989 16.5647 114.883 16.4222 114.712 16.3349C114.525 16.2593 114.294 16.2302 114.018 16.2477C113.936 16.2506 113.855 16.252 113.773 16.252C113.535 16.2578 113.292 16.2622 113.045 16.2651H112.901C112.403 16.2738 111.903 16.2724 111.4 16.2607C111.368 16.2607 111.336 16.2607 111.304 16.2607C111.033 16.2666 110.745 16.2447 110.44 16.1953C110.137 16.1429 109.845 16.0048 109.563 15.7808ZM117.212 16.2564V15.0084C117.212 14.3393 117.456 13.7503 117.945 13.2412C118.454 12.7525 119.042 12.5081 119.708 12.5081H121.999C122.665 12.5081 123.254 12.7525 123.766 13.2412C124.252 13.7503 124.495 14.3393 124.495 15.0084V16.2564C124.495 16.9225 124.252 17.5102 123.766 18.0192C123.254 18.508 122.665 18.7523 121.999 18.7523H119.708C119.042 18.7523 118.454 18.508 117.945 18.0192C117.456 17.5102 117.212 16.9225 117.212 16.2564ZM118.46 15.0084V16.2564C118.46 16.5996 118.582 16.8935 118.826 17.1378C119.071 17.3822 119.365 17.5044 119.708 17.5044H121.999C122.342 17.5044 122.636 17.3822 122.88 17.1378C123.124 16.8935 123.247 16.5996 123.247 16.2564V15.0084C123.247 14.6622 123.124 14.367 122.88 14.1226C122.636 13.8783 122.342 13.7561 121.999 13.7561H119.708C119.365 13.7561 119.071 13.8783 118.826 14.1226C118.582 14.367 118.46 14.6622 118.46 15.0084ZM125.372 12.5081H126.62V17.5044H132.03V18.7523H125.372V12.5081ZM135.399 18.7523C134.733 18.7523 134.145 18.508 133.636 18.0192C133.147 17.5102 132.903 16.9225 132.903 16.2564V12.5081H134.151V16.2564C134.151 16.5996 134.273 16.8935 134.518 17.1378C134.762 17.3822 135.056 17.5044 135.399 17.5044H137.69C138.033 17.5044 138.327 17.3822 138.571 17.1378C138.816 16.8935 138.938 16.5996 138.938 16.2564V12.5081H140.186V16.2564C140.186 16.9225 139.943 17.5102 139.457 18.0192C138.945 18.508 138.356 18.7523 137.69 18.7523H135.399ZM148.036 12.5081V13.7561H145.121V18.7523H143.873V13.7561H141.063V12.5081H148.036ZM148.908 12.5081H150.156V18.7523H148.908V12.5081ZM151.029 16.2564V15.0084C151.029 14.3393 151.274 13.7503 151.762 13.2412C152.271 12.7525 152.859 12.5081 153.525 12.5081H155.816C156.482 12.5081 157.071 12.7525 157.583 13.2412C158.069 13.7503 158.312 14.3393 158.312 15.0084V16.2564C158.312 16.9225 158.069 17.5102 157.583 18.0192C157.071 18.508 156.482 18.7523 155.816 18.7523H153.525C152.859 18.7523 152.271 18.508 151.762 18.0192C151.274 17.5102 151.029 16.9225 151.029 16.2564ZM152.277 15.0084V16.2564C152.277 16.5996 152.399 16.8935 152.644 17.1378C152.888 17.3822 153.182 17.5044 153.525 17.5044H155.816C156.159 17.5044 156.453 17.3822 156.697 17.1378C156.942 16.8935 157.064 16.5996 157.064 16.2564V15.0084C157.064 14.6622 156.942 14.367 156.697 14.1226C156.453 13.8783 156.159 13.7561 155.816 13.7561H153.525C153.182 13.7561 152.888 13.8783 152.644 14.1226C152.399 14.367 152.277 14.6622 152.277 15.0084ZM160.437 14.0004V18.7523H159.189V12.5081H160.703L165.538 17.2644V12.5081H166.786V18.7523H165.272L160.437 14.0004ZM168.304 15.7808C168.104 15.6091 167.947 15.4011 167.833 15.1568C167.72 14.9095 167.663 14.6506 167.663 14.3801C167.663 14.0368 167.747 13.7241 167.916 13.4419C168.085 13.1568 168.31 12.9299 168.592 12.7612C168.877 12.5925 169.192 12.5081 169.535 12.5081H174.736V13.7561H169.535C169.363 13.7561 169.216 13.8172 169.094 13.9394C168.972 14.0615 168.911 14.2084 168.911 14.3801C168.911 14.5517 168.978 14.7015 169.112 14.8295C169.216 14.9139 169.35 14.9662 169.513 14.9866C169.676 15.0041 169.858 15.0128 170.058 15.0128C170.093 15.0128 170.128 15.0128 170.163 15.0128H170.168C170.656 15.0215 171.145 15.023 171.634 15.0171H171.778C172.016 15.0142 172.253 15.0099 172.489 15.0041C172.57 15.0041 172.653 15.0026 172.738 14.9997C172.933 14.9939 173.138 15.0026 173.353 15.0259C173.571 15.0491 173.788 15.1117 174.003 15.2135C174.541 15.4899 174.873 15.9277 174.998 16.5269C175.05 16.8091 175.042 17.0869 174.972 17.3604C174.896 17.6513 174.758 17.9087 174.557 18.1327C174.377 18.3305 174.167 18.4832 173.929 18.5909C173.69 18.6985 173.44 18.7523 173.178 18.7523H167.872V17.5044H173.178C173.347 17.5044 173.497 17.436 173.628 17.2993C173.762 17.148 173.81 16.9691 173.772 16.7626C173.731 16.5647 173.625 16.4222 173.453 16.3349C173.267 16.2593 173.036 16.2302 172.76 16.2477C172.678 16.2506 172.597 16.252 172.515 16.252C172.277 16.2578 172.034 16.2622 171.786 16.2651H171.642C171.145 16.2738 170.645 16.2724 170.141 16.2607C170.109 16.2607 170.077 16.2607 170.045 16.2607C169.775 16.2666 169.487 16.2447 169.181 16.1953C168.879 16.1429 168.587 16.0048 168.304 15.7808Z'
					fill='#091F2C'
				/>
			</svg>
		</Link>
	)
}
