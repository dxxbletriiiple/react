// import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from '../Header/Header';
import { PromoList } from '../Promo/PromoList';
import { NewArrivalsList } from '../NewArrivalsList/NewArrivalsList';
import { Brands } from '../Brands/Brands';
import './App.scss';
import { Collections } from '../Collections/Collections';

function App() {
	return (
		<div className='app'>
			<Header />
			<PromoList />
			<NewArrivalsList />
			<Brands />
			<Collections />
		</div>
	);
}

export default App;
