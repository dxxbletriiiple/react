export const CharListItem = ({ id, name, thumbnail, onCharSelected }) => {
	const imgStyle = thumbnail?.includes('image_not_available')
		? { objectFit: 'contain' }
		: { objectFit: 'cover' };

	const handleSelect = (e) => {
		return e.key === ' ' || e.key === 'Enter' || e.type === 'click' ? onCharSelected(id) : null;
	};
	return (
		<li
			className='char__item'
			key={id + name}
			tabIndex={0}
			onClick={handleSelect}
			onKeyDown={handleSelect}
		>
			<img src={thumbnail} alt={name} style={imgStyle} />
			<div className='char__name'>{name}</div>
		</li>
	);
};
