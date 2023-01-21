export const JustForYouItem = ({ imgUrl, title, price }) => {
	return (
		<li className='just_for_you_item'>
			<img src={imgUrl} alt={title} className='just_for_you_item' />
			<div className='new_arrivals_item_name'>{title}</div>
			<div className='new_arrivals_item_price'>{price}</div>
		</li>
	);
};
