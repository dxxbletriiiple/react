import { Error } from '../Error/Error';
import { Link } from 'react-router-dom';
export const Page404 = () => {
	return (
		<div>
			<Error />
			<p
				style={{
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: '24px',
					marginBottom: '20px',
				}}
			>
				Page doesn't exist
			</p>
			<Link
				style={{
					display: 'block',
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: '24px',
				}}
				to='/'
			>
				Back to main page
			</Link>
		</div>
	);
};
