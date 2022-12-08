import { AppHeader } from '../AppHeader/AppHeader';
import { RandomChar } from '../RandomChar/RandomChar';
import { CharList } from '../CharList/CharList';
import { CharInfo } from '../CharInfo/CharInfo';
import decoration from '../../assets/img/vision.png';

export const App = () => {
	return (
		<div className='app'>
			<AppHeader />
			<main>
				<RandomChar />
				<div className='char__content'>
					<CharList />
					<CharInfo />
				</div>
				<img className='bg-decoration' src={decoration} alt='vision' />
			</main>
		</div>
	);
};
