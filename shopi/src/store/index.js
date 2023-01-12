import { configureStore } from '@reduxjs/toolkit';
import { someReducer } from '../reducers/reducer';

export default configureStore({
	reducer: { someReducer },
	middleware: (middleware) => middleware().concat(),
	devTools: process.env.NODE_ENV !== 'profuction',
});
