import { Link } from 'react-router-dom';
import './ComicsListItem.scss';

export const ComicsListItem = ({ id, title, thumbnail, price }) => {
	const st = { objectFit: thumbnail?.includes('image_not_available') ? 'contain' : '' };
	return (
		<li className='comics__item' key={id + title} tabIndex={0}>
			<Link to={`${id}`}>
				<img src={thumbnail} style={st} alt='ultimate war' className='comics__item-img' />
				<div className='comics__item-name'>{title}</div>
				<div className='comics__item-price'>{price}</div>
			</Link>
		</li>
	);
};
