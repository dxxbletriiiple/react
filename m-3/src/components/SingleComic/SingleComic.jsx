import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMarvelService } from '../../services/MarvelServices';
import { Error } from '../Error/Error';
import { AppBanner } from '../AppBanner/AppBanner';
import { Spinner } from '../Spinner/Spinner';

import './singleComic.scss';

export const SingleComic = () => {
	const [comic, setComic] = useState({});
	const { loading, error, getComic, clearError } = useMarvelService();
	const { id } = useParams();

	useEffect(() => {
		updateComic();
		// eslint-disable-next-line
	}, [id]);

	const updateComic = () => {
		clearError();
		getComic(id).then(onComicLoaded);
	};

	const onComicLoaded = (comic) => {
		setComic(comic);
	};

	const errorMessage = error ? <Error /> : null;
	const spinner = loading ? <Spinner /> : null;
	const content = !(loading || error || !comic) ? <View {...comic} /> : null;

	return (
		<>
			<AppBanner />
			{errorMessage}
			{spinner}
			{content}
		</>
	);
};

const View = ({ thumbnail, title, description, pageCount, language, price }) => {
	const st = thumbnail?.includes('image_not_available') ? { objectFit: 'contain' } : null;
	return (
		<>
			<div className='single-comic'>
				<img src={thumbnail} style={st} alt={title} className='single-comic__img' />
				<div className='single-comic__info'>
					<h2 className='single-comic__name'>{title}</h2>
					<p className='single-comic__descr'>{description}</p>
					<p className='single-comic__descr'>{pageCount}</p>
					<p className='single-comic__descr'>Language: {language}</p>
					<div className='single-comic__price'>{price}</div>
				</div>
				<Link to='/comics' className='single-comic__back'>
					Back to all
				</Link>
			</div>
		</>
	);
};
