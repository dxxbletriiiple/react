import { createContext } from 'react';

export const context = createContext({
	selectedPerson: {},
	onPersonSelected() {},
});
