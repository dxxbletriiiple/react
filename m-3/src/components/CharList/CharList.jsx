import { useState, useLayoutEffect } from 'react';
import { MarvelService } from '../../services/MarvelServices';
import { CharListItem } from '../CharListItem/CharListItem';
import './charList.scss';

export const CharList = ({ onCharSelected }) => {
	const [list, setList] = useState([]);
	const [offset, setOffset] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [end, setEnd] = useState(false);
	// const [error, setError] = useState(false);
	const ms = new MarvelService();

	useLayoutEffect(() => {
		onRequest();
		// eslint-disable-next-line
	}, []);

	const onLoading = () => {
		setOffset(offset + 9);
	};

	const onRequest = (offset) => {
		onLoading();
		setIsLoading(true);
		ms.getAllResources(offset).then((res) => {
			if (res.length === 0) return setEnd(true);
			setList([...list, ...res]);
			setIsLoading(false);
		});
		// .catch(() => setError(true));
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
				onClick={() => onRequest(offset)}
				style={{ display: end ? 'none' : 'block' }}
			>
				<div className='inner'>load more</div>
			</button>
		</div>
	);
};
