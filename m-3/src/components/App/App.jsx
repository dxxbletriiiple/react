import { useState } from 'react';
import { AppHeader } from '../AppHeader/AppHeader';
import { RandomChar } from '../RandomChar/RandomChar';
import { CharList } from '../CharList/CharList';
import { CharInfo } from '../CharInfo/CharInfo';
import decoration from '../../assets/img/vision.png';

export const App = () => {
	const [charID, setCharID] = useState(0);

	const onCharSelected = (id) => {
		setCharID(id);
	};
	return (
		<div className='app'>
			<AppHeader />
			<main>
				<RandomChar />
				<div className='char__content'>
					<CharList onCharSelected={onCharSelected} />
					<CharInfo id={charID} />
				</div>
				<img className='bg-decoration' src={decoration} alt='vision' />
			</main>
		</div>
	);
};
