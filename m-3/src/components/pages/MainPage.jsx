import { useState } from 'react';
import { RandomChar } from '../RandomChar/RandomChar';
import { CharList } from '../CharList/CharList';
import { CharInfo } from '../CharInfo/CharInfo';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import decoration from '../../assets/img/vision.png';

export const MainPage = () => {
	const [charID, setCharID] = useState(0);

	const onCharSelected = (id) => {
		setCharID(id);
	};
	return (
		<>
			<ErrorBoundary>
				<RandomChar />
			</ErrorBoundary>
			<div className='char__content'>
				<ErrorBoundary>
					<CharList onCharSelected={onCharSelected} />
					<CharInfo id={charID} />
				</ErrorBoundary>
			</div>
			<img className='bg-decoration' src={decoration} alt='vision' />
		</>
	);
};
