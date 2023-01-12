// import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from '../Header/Header';
import store from '../../store/';
import './App.scss';

function App() {
	console.log(store);
	return (
		<div className='app'>
			<Header />
		</div>
	);
}

export default App;
