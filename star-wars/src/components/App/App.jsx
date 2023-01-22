import { useState } from 'react';
import { context } from '../../context/context';
import { Header } from '../Header/Header';
import { RandomPlanet } from '../RandomPlanet/RandomPlanet';
import { ItemList } from '../ItemList/ItemList';
import { PersonDetails } from '../PersonDetails/PersonDetails';
import './App.scss';

const { Provider } = context;

function App() {
	const [selectedPerson, setSelectedPerson] = useState({});

	const onPersonSelected = (person) => {
		setSelectedPerson(person);
	};
	return (
		<Provider value={{ selectedPerson, onPersonSelected }}>
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
		</Provider>
	);
}

export default App;
