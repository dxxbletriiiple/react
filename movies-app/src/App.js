import { Header } from './layout/Header';
import { Main } from './layout/Main';
import { Footer } from './layout/Footer';
import { Movie } from './components/Movie';

function App() {
	console.log(process.env.API_key);
	return (
		<div className="App">
			<Header />
			<Main>
				<Movie />
			</Main>
			<Footer />
		</div>
	);
}

export default App;
