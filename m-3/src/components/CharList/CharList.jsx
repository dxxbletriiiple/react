import { useState, useLayoutEffect } from 'react';
import { useMarvelService } from '../../services/MarvelServices';
import { CharListItem } from '../CharListItem/CharListItem';
import './charList.scss';

export const CharList = ({ onCharSelected }) => {
	const [list, setList] = useState([]);
	const [offset, setOffset] = useState(0);
	const [end, setEnd] = useState(false);
	const { loading, getAllResources } = useMarvelService();

	useLayoutEffect(() => {
		onRequest();
		// eslint-disable-next-line
	}, []);

	const onRequest = () => {
		setOffset((offset) => offset + 9);
		getAllResources(offset).then((res) => {
			if (res.length === 0) return setEnd(true);
			setList([...list, ...res]);
		});
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
				disabled={loading}
				onClick={() => onRequest(offset)}
				style={{ display: end ? 'none' : 'block' }}
			>
				<div className='inner'>load more</div>
			</button>
		</div>
	);
};
