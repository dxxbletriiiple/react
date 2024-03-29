import { useState, useEffect } from 'react';
import { useMarvelService } from '../../services/MarvelServices';
import { CharComicsItem } from '../CharComicsItem/CharComicsItem';
import { Skeleton } from '../Skeleton/Skeleton';
import { Spinner } from '../Spinner/Spinner';
import { Error } from '../Error/Error';
import './charInfo.scss';

export const CharInfo = ({ id }) => {
	const [char, setChar] = useState(null);
	const { loading, error, getCharacter } = useMarvelService();

	useEffect(() => {
		if (id === 0) return;
		updateChar();
		// eslint-disable-next-line
	}, [id]);

	const updateChar = async () => {
		getCharacter(id).then(setChar);
	};

	const sk = char || loading || error ? null : <Skeleton />;
	const er = error ? <Error /> : null;
	const sp = loading ? <Spinner /> : null;
	const content = !(loading || error || !char) ? <View {...char} /> : null;
	return (
		<div className='char__info'>
			{sk}
			{er}
			{sp}
			{content}
		</div>
	);
};

const View = ({ id, name, thumbnail, description, homepage, wiki, comics }) => {
	let imgStyle = thumbnail?.includes('image_not_available') ? { objectFit: 'contain' } : null;

	return (
		<>
			<div className='char__basics'>
				<img src={thumbnail} alt={name} style={imgStyle} />
				<div>
					<div className='char__info-name'>{name}</div>
					<div className='char__btns'>
						<a href={homepage} className='button button__main'>
							<div className='inner'>homepage</div>
						</a>
						<a href={wiki} className='button button__secondary'>
							<div className='inner'>Wiki</div>
						</a>
					</div>
				</div>
			</div>
			<div className='char__descr'>{description}</div>
			<div className='char__comics'>Comics:</div>
			<ul className='char__comics-list'>
				{comics[0]
					? comics?.map((el, i) => <CharComicsItem {...el} i={i} />)
					: `There is no comics about ${name}`}
			</ul>
		</>
	);
};
