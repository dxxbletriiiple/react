// import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from '../Header/Header';
import { PromoList } from '../Promo/PromoList';
import { NewArrivalsList } from '../NewArrivalsList/NewArrivalsList';
import { Brands } from '../Brands/Brands';
import { Collections } from '../Collections/Collections';
import { JustForYou } from '../JustForYou/JustForYou';
import './App.scss';

function App() {
	return (
		<div className='app'>
			<Header />
			<PromoList />
			<NewArrivalsList />
			<Brands />
			<Collections />
			<JustForYou />
		</div>
	);
}

export default App;
