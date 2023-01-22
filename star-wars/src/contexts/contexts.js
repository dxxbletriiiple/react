import { createContext } from 'react';

export const peopleContext = createContext({
	selectedPerson: {},
	onPersonSelected() {},
});
