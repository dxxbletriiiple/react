import './NewArrivalsItem.scss';

export const NewArrivalsItem = ({ imgUrl, name, price }) => {
	return (
		<li className='new_arrivals_item'>
			<img
				src='https://images.unsplash.com/photo-1673470743061-d4049079d980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
				alt={name}
			/>
			<div className='new_arrivals_item_name'>{name}</div>
			<div className='new_arrivals_item_price'>{price}</div>
		</li>
	);
};
