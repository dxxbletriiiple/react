import { Header } from '../Header/Header';
import { RandomPlanet } from '../RandomPlanet/RandomPlanet';
import { PeoplePage } from '../../pages/PeoplePage/PeoplePage';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<div>
				<Header />
				<RandomPlanet />
				<PeoplePage />
			</div>
		</div>
	);
}

export default App;
