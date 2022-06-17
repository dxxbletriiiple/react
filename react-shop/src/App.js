import { Header } from './components/Header';
import { Shop } from './components/Shop';
import { Footer } from './components/Footer';
import { API_KEY } from './config';

function App() {
	console.log(API_KEY);
	return (
		<>
			<Header />
			<Shop />
			<Footer />
		</>
	);
}

export default App;
