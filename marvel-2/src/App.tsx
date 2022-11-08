import { FC } from 'react';
import { MarvelService } from './services/MarvelServices';
import './App.scss';

const Title: FC<{ text: string }> = ({ text }) => <h1>{text}</h1>;
const ms = new MarvelService();
ms.getAllResources().then((res) => console.log(res.data.results));
export default function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Title text='lol' />
				<p>lol</p>
			</header>
		</div>
	);
}
