import { FC } from 'react';
import { AppHeader } from '../AppHeader/AppHeader';
import { RandomChar } from '../RandomChar/RandomChar';
import { CharList } from '../CharList/CharList';
import { CharInfo } from '../CharInfo/CharInfo';
import { MarvelService } from '../../services/MarvelServices';
import decoration from '../../assets/img/vision.png';

const ms = new MarvelService();
ms.getAllResources().then((res: any) => console.log(res.data.results));

export const App: FC = () => {
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
