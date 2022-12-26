import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';

const initialState = 0;

console.dir(createStore);

const reducer = (state = 0, action) => {
	switch (action.type) {
		case 'INC':
			return ++state;
		case 'DEC':
			return --state;
		case 'RND':
			return state * action.payload;
		default:
			return state;
	}
};

const store = createStore(reducer);

document.querySelector('#inc').addEventListener('click', () => store.dispatch({ type: 'INC' }));
document.querySelector('#dec').addEventListener('click', () => store.dispatch({ type: 'DEC' }));
document
	.querySelector('#rnd')
	.addEventListener('click', () =>
		store.dispatch({ type: 'RND', payload: Math.floor(Math.random()) }),
	);

store.subscribe(() => {
	document.querySelector('h1').textContent = store.getState();
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode></React.StrictMode>);
