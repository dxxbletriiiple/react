import { createContext } from 'react';

export const context = createContext({
	selectedPerson: {
		id: '1',
		name: 'Luke Skywalker',
		gender: 'male',
		birthYear: '19BBY',
		eyeColor: 'blue',
	},
	onPersonSelected() {},
});
