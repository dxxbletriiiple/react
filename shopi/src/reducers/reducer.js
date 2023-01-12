import { createReducer } from '@reduxjs/toolkit';
import { someAction } from '../actions/actions';
const initialState = {
	lol: 'kek',
};
export const someReducer = createReducer(initialState, {
	[someAction]: (state) => {
		state.lol = 'lol';
	},
});
