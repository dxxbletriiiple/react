import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, bindActionCreators } from 'redux';
import * as actions from './actions';
import { reducer } from './reducer';
import './index.css';
// import { configureStore } from '@reduxjs/toolkit';
const state = document.querySelector('h1');
const incBtn = document.querySelector('#inc');
const decBtn = document.querySelector('#dec');
const rndBtn = document.querySelector('#rnd');

const store = createStore(reducer);
const { dispatch, subscribe, getState } = store;
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

incBtn.addEventListener('click', () => inc());
decBtn.addEventListener('click', () => dec());
rndBtn.addEventListener('click', () => rnd(Math.floor(Math.random() * 10)));

subscribe(() => {
	state.textContent = getState().value;
});

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode></React.StrictMode>);
