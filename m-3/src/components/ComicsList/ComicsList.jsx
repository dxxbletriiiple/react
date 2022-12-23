import { useState, useEffect } from 'react';
import { useMarvelService } from '../../services/MarvelServices';

import { ComicsListItem } from '../ComicsListItem/ComicsListItem';
import './comicsList.scss';

export const ComicsList = ({ onComicsSelected }) => {
	const [list, setList] = useState([]);
	const [offset, setOffset] = useState(0);
	const [end, setEnd] = useState(false);
	const { loading, getAllComics } = useMarvelService();

	useEffect(() => {
		onRequest();
		// eslint-disable-next-line
	}, []);

	const onRequest = () => {
		setOffset((offset) => offset + 8);
		getAllComics(offset).then((res) => {
			if (res.length === 0) return setEnd(true);
			setList([...list, ...res]);
		});
	};

	return (
		<>
			<div className='comics__list'>
				<ul className='comics__grid'>
					{list.map((el) => (
						<ComicsListItem {...el} onCharSelected={onComicsSelected} />
					))}
				</ul>
				<button className='button button__main button__long'>
					<div
						className='inner'
						disabled={loading}
						onClick={() => onRequest(offset)}
						style={{ display: end ? 'none' : 'block' }}
					>
						load more
					</div>
				</button>
			</div>
		</>
	);
};
