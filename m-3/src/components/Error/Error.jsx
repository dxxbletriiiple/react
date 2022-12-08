export const Error = () => (
	<img
		src={process.env.PUBLIC_URL + '/error.gif'}
		alt='Error'
		style={{
			display: 'block',
			width: '250px',
			height: '250px',
			objectFit: 'contain',
			margin: '0 auto',
		}}
	/>
);
