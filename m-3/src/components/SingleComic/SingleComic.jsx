import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMarvelService } from '../../services/MarvelServices';
import { Spinner } from '../Spinner/Spinner';

import './singleComic.scss';

export const SingleComic = () => {
	const [comic, setComic] = useState({});
	const { loading, getComics } = useMarvelService();
	const { id } = useParams();

	useEffect(() => {
		getComics(id).then(setComic);
		// eslint-disable-next-line
	}, []);
	const st = comic.thumbnail?.includes('image_not_available') ? { objectFit: 'contain' } : null;
	return loading ? (
		<Spinner />
	) : (
		<>
			<div className='single-comic'>
				<img
					src={comic.thumbnail}
					style={st}
					alt={comic.title}
					className='single-comic__img'
				/>
				<div className='single-comic__info'>
					<h2 className='single-comic__name'>{comic.title}</h2>
					<p className='single-comic__descr'>{comic.description}</p>
					<p className='single-comic__descr'>{comic.pageCount}</p>
					<p className='single-comic__descr'>{comic.language}</p>
					<div className='single-comic__price'>{comic.price}</div>
				</div>
				<Link to='/comics' className='single-comic__back'>
					Back to all
				</Link>
			</div>
		</>
	);
};
