import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
	reducer: {},
	middleware: [],
	devTools: process.env.NODE_ENV !== 'profuction',
});
