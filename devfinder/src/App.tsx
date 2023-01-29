import { Container } from './components/Container';
import { TheHeader } from './components/TheHeader';
import { Search } from './components/Search';
import './App.scss';

function App() {
	return (
		<div className='App'>
			<Container>
				<TheHeader />
				<Search hasError onSubmit={() => {}} />
			</Container>
		</div>
	);
}

export default App;
