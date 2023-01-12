import { PromoItem } from './PromoItem';
import { PromoBtn } from '../Buttons/PromoBtn';
import './Promo.scss';

const arr = [
	'https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
	'https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
	'https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
];

export const PromoList = () => {
	return (
		<div className='promo'>
			<div className='view'>
				<div className='promo_list'>
					{arr.map((item) => (
						<PromoItem bg={item} key={crypto.randomUUID()} />
					))}
				</div>
			</div>
			<div className='promo_text_and_button'>
				<div className='promo_text'>
					<span>Accessories</span>
					<span>Fashion</span>
					<span>Accessories</span>
				</div>
				<PromoBtn />
			</div>
			<div className='dots'>
				<span className='dot'></span>
				<span className='dot'></span>
				<span className='dot'></span>
			</div>
		</div>
	);
};
