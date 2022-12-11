import { useState, useEffect } from 'react';
import { MarvelService } from '../../services/MarvelServices';
import { CharListItem } from '../CharListItem/CharListItem';
import './charList.scss';

export const CharList = ({ onCharSelected }) => {
	const [list, setList] = useState([]);
	const ms = new MarvelService();
	useEffect(() => {
		ms.getAllResources().then(setList);
		// eslint-disable-next-line
	}, []);

	return (
		<div className='char__list'>
			<ul className='char__grid'>
				{list.map((el) => (
					<CharListItem {...el} onCharSelected={onCharSelected} />
				))}
			</ul>
			<button className='button button__main button__long'>
				<div className='inner'>load more</div>
			</button>
		</div>
	);
};
