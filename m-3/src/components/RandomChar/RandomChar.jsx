import { useState, useEffect } from 'react';
import { useMarvelService } from '../../services/MarvelServices';
import { Button } from '../Button/Button';
import { Error } from '../Error/Error';
import { Spinner } from '../Spinner/Spinner.jsx';
import mjolnir from '../../assets/img/mjolnir.png';
import './randomChar.scss';

export const RandomChar = () => {
	const [character, setCharacter] = useState({});
	const { loading, error, getCharacter, clearError } = useMarvelService();

	useEffect(() => {
		updateChar();
		// eslint-disable-next-line
	}, []);

	const updateChar = async () => {
		clearError();
		const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
		getCharacter(id).then(setCharacter);
	};

	return (
		<div className='randomchar'>
			{loading ? <Spinner /> : null}
			{error ? <Error /> : null}
			{!(loading || error) ? <View {...character} /> : null}
			<div className='randomchar__static'>
				<p className='randomchar__title'>
					Random character for today!
					<br />
					Do you want to get to know him better?
				</p>
				<p className='randomchar__title'>Or choose another one</p>
				<button className='button button__main' onClick={updateChar}>
					<div className='inner'>try it</div>
				</button>
				<img src={mjolnir} alt='mjolnir' className='randomchar__decoration' />
			</div>
		</div>
	);
};

const View = ({ name, description, thumbnail, homepage, wiki }) => {
	let imgStyle = thumbnail?.includes('image_not_available')
		? { objectFit: 'contain' }
		: { objectFit: 'cover' };
	return (
		<div className='randomchar__block'>
			<img src={thumbnail} alt={name} className='randomchar__img' style={imgStyle} />
			<div className='randomchar__info'>
				<p className='randomchar__name'>{name}</p>
				<p className='randomchar__descr'>{description}</p>
				<div className='randomchar__btns'>
					<a href={homepage} className='button button__main'>
						<div className='inner'>
							<Button text='homepage' />
						</div>
					</a>
					<a href={wiki} className='button button__secondary'>
						<div className='inner'>
							<Button text='Wiki' />
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};
