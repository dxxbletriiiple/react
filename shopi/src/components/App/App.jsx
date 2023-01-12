// import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from '../Header/Header';
import { PromoList } from '../Promo/PromoList';
import { NewArrivalsList } from '../NewArrivalsList/NewArrivalsList';
import './App.scss';

function App() {
	return (
		<div className='app'>
			<Header />
			<PromoList />
			<NewArrivalsList />
		</div>
	);
}

export default App;
