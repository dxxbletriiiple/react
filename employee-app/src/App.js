import './App.css';

function App() {
	const shop = [{ rise: 100 }, { luk: 321 }, { lol: 333 }];
	const map = new Map();
	const budget = [100, 12002, 303030];
	shop.forEach((element, i) => {
		map.set(element, budget[i]);
	});
	console.log(map);
	return (
		<>
			<h1>lol</h1>
		</>
	);
}

export default App;
