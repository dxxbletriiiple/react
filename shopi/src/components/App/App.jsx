// import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from '../Header/Header';
import { PromoList } from '../Promo/PromoList';
import './App.scss';

function App() {
	return (
		<div className='app'>
			<Header />
			<PromoList />
		</div>
	);
}

export default App;
