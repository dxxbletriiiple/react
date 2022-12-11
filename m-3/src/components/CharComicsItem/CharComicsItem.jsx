export const CharComicsItem = ({ name, i }) => {
	return (
		<li className='char__comics-item' key={i}>
			{name}
		</li>
	);
};
