import { Header } from '../Header/Header';
import { RandomPlanet } from '../RandomPlanet/RandomPlanet';
import { ItemList } from '../ItemList/ItemList';
import { PersonDetails } from '../PersonDetails/PersonDetails';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<div>
				<Header />
				<RandomPlanet />

				<div className='row mb2'>
					<div className='col-md-6'>
						<ItemList />
					</div>
					<div className='col-md-6'>
						<PersonDetails />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
