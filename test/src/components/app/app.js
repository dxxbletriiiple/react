import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
// import EmployeesListItem from '../employees-list-item/employees-list-item';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: 'John C.', salary: 800, id: 1 },
				{ name: 'Alex M.', salary: 3000, id: 2 },
				{ name: 'Carl W.', salary: 5000, id: 3 },
			],
		};
		this.idCounter = 4;
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return { data: data.filter((item) => item.id !== id) };
		});
	};

	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id: this.idCounter++,
		};
		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr,
			};
		});
	};
	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map((item) => (item.id === id ? { ...item, [prop]: !item[prop] } : item)),
		}));
	};
	render() {
		const employees = this.state.data.length;
		const incrased = this.state.data.filter((item) => item.increase).length;
		return (
			<div className="app">
				<AppInfo increased={incrased} employees={employees}></AppInfo>
				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployeesList
					data={this.state.data}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				></EmployeesList>
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}
export default App;
