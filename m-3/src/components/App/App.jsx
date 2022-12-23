import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage, ComicsPage, Page404 } from '../pages/';
import { AppHeader } from '../AppHeader/AppHeader';

export const App = () => {
	return (
		<Router>
			<div className='app'>
				<AppHeader />
				<main>
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/comics' element={<ComicsPage />} />
						<Route path='*' element={<Page404 />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
};
