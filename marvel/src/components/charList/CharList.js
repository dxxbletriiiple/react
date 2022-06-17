import { useState, useEffect, useRef } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';
import './charList.scss';

const CharList = (props) => {
	const [charList, setCharList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [itemsLoading, setItemsLoading] = useState(false);
	const [offset, setOffset] = useState(210);
	const [charEnd, setCharEnd] = useState(false);

	const marvelService = new MarvelService();

	useEffect(() => {
		onRequest();
	}, []);

	const onCharListLoaded = (newCharList) => {
		setCharList((charList) => [...charList, ...newCharList]);
		setLoading(false);
		setItemsLoading(false);
		setOffset((offset) => offset + 9);
		setCharEnd(newCharList < 9);
	};

	const onCharListLoading = () => {
		setItemsLoading(true);
	};
	const onError = () => {
		setError(true);
		setLoading(false);
	};

	const onRequest = (offset) => {
		onCharListLoading();
		marvelService.getAllCharacters(offset).then(onCharListLoaded).catch(onError);
	};
	const itemRefs = useRef([]);

	const focusOnItem = (id) => {
		itemRefs.current.forEach((item) => item.classList.remove('char__item_selected'));
		itemRefs.current[id].classList.add('char__item_selected');
		itemRefs.current[id].focus();
	};

	function renderItems(arr) {
		const items = arr.map((item, i) => {
			let imgStyle = item.thumbnail.includes('image_not_available')
				? { objectFit: 'unset' }
				: { objectFit: 'cover' };

			return (
				<li
					className="char__item"
					key={item.id}
					ref={(el) => (itemRefs.current[i] = el)}
					onClick={() => {
						props.onCharSelected(item.id);
						focusOnItem(i);
					}}
					tabIndex={0}
					onKeyPress={(e) => {
						if (e.key === ' ' || e.key === 'Enter') {
							props.onCharSelected(item.id);
							focusOnItem(i);
						}
					}}
				>
					<img src={item.thumbnail} alt={item.name} style={imgStyle} />
					<div className="char__name">{item.name}</div>
				</li>
			);
		});
		return <ul className="char__grid">{items}</ul>;
	}
	const items = renderItems(charList);

	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading ? <Spinner /> : null;
	const content = !(loading || error) ? items : null;

	return (
		<div className="char__list">
			{errorMessage}
			{spinner}
			{content}
			<button
				className="button button__main button__long"
				disabled={itemsLoading}
				onClick={() => onRequest(offset)}
				style={{ display: charEnd ? 'none' : 'block' }}
			>
				<div className="inner">load more</div>
			</button>
		</div>
	);
};

export default CharList;
