// import { Link } from 'react-router-dom';
import './Header.scss';
export const Header = () => {
	return (
		<header className='header'>
			<div className='menu'>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className='logo'></div>
			<div className='search-and-cart'>
				<div className='search'></div>
				<div className='cart'></div>
			</div>
		</header>
	);
};
