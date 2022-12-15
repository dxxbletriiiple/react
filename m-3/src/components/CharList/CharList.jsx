import { useState, useEffect } from 'react';
import { MarvelService } from '../../services/MarvelServices';
import { CharListItem } from '../CharListItem/CharListItem';
import './charList.scss';

export const CharList = ({ onCharSelected }) => {
	const [list, setList] = useState([]);
	const [offset, setOffset] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const ms = new MarvelService();

	useEffect(() => {
		onCharListLoaded(offset);
		// eslint-disable-next-line
	}, []);

	const onCharListLoaded = (offset2) => {
		ms.getAllResources(offset2)
			.then((res) => {
				setIsLoading(true);
				setList([...list, ...res]);
			})
			.then(() => setIsLoading(false))
			.catch(() => setError(true));
	};

	const handleClick = () => {
		setOffset(offset + 9);
		onCharListLoaded(offset + 9);
	};

	return (
		<div className='char__list'>
			<ul className='char__grid'>
				{list.map((el) => (
					<CharListItem {...el} onCharSelected={onCharSelected} />
				))}
			</ul>
			<button
				className='button button__main button__long'
				disabled={isLoading}
				onClick={handleClick}
			>
				<div className='inner'>load more</div>
			</button>
		</div>
	);
};
