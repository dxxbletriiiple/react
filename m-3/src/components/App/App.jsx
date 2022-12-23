import { useState } from 'react';
import { AppHeader } from '../AppHeader/AppHeader';
import { AppBanner } from '../AppBanner/AppBanner';
import { RandomChar } from '../RandomChar/RandomChar';
import { CharList } from '../CharList/CharList';
import { CharInfo } from '../CharInfo/CharInfo';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { ComicsList } from '../ComicsList/ComicsList';
import decoration from '../../assets/img/vision.png';

export const App = () => {
	const [charID, setCharID] = useState(0);

	const onCharSelected = (id) => {
		setCharID(id);
	};
	return (
		<div className='app'>
			<AppHeader />
			<AppBanner />
			{/* <main>
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
			</main> */}
			<ComicsList />
		</div>
	);
};
