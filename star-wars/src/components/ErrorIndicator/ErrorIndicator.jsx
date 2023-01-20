import icon from '../../assets/death-star.png';
import './ErrorIndicator.scss';

export const ErrorIndicator = () => {
	return (
		<div className='error-indicator'>
			<img src={icon} alt='error icon' />
			<span className='boom'>BOOM!</span>
			<span>something has gone terribly wrong</span>
			<span>(but we already sent droids to fix it)</span>
		</div>
	);
};
