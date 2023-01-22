import { useState } from 'react';
import { peopleContext } from '../../contexts/contexts';
import { ItemList } from '../../components/ItemList/ItemList';
import { PersonDetails } from '../../components/PersonDetails/PersonDetails';

const { Provider: PeopleProvider } = peopleContext;

export const PeoplePage = () => {
	const [selectedPerson, setSelectedPerson] = useState({
		id: '1',
		name: 'Luke Skywalker',
		gender: 'male',
		birthYear: '19BBY',
		eyeColor: 'blue',
	});

	const onPersonSelected = (person) => {
		setSelectedPerson(person);
	};

	return (
		<PeopleProvider value={{ selectedPerson, onPersonSelected }}>
			<div className='row mb2'>
				<div className='col-md-6'>
					<ItemList />
				</div>
				<div className='col-md-6'>
					<PersonDetails />
				</div>
			</div>
		</PeopleProvider>
	);
};
