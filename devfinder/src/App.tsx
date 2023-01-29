import { Container } from './components/Container';
import './App.scss';
import { TheHeader } from './components/TheHeader';

function App() {
	return (
		<div className='App'>
			<Container>
				<TheHeader />
			</Container>
		</div>
	);
}

export default App;
