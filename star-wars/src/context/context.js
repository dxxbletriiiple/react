import { createContext } from 'react';

export const context = createContext({
	selectedPerson: {
		id: '',
		name: '',
		gender: '',
		birthYear: '',
		eyeColor: '',
	},
	onPersonSelected() {},
});
