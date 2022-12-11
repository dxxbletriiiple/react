export const CharListItem = ({ id, name, thumbnail, onCharSelected }) => {
	const imgStyle = thumbnail?.includes('image_not_available')
		? { objectFit: 'contain' }
		: { objectFit: 'cover' };
	return (
		<li className='char__item' key={id + name} onClick={() => onCharSelected(id)}>
			<img src={thumbnail} alt={name} style={imgStyle} />
			<div className='char__name'>{name}</div>
		</li>
	);
};
