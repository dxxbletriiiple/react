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
				{ name: 'John C.', salary: 800, id: 1, increase: false, rise: true },
				{ name: 'Alex M.', salary: 3000, id: 2, increase: false, rise: false },
				{ name: 'Carl W.', salary: 5000, id: 3, increase: false, rise: false },
			],
			term: '',
			filter: 'all',
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
	searchEmployee = (items, term) => {
		return term.length === 0 ? items : items.filter((item) => item.name.indexOf(term) > -1);
	};
	onUpdSearch = (term) => {
		this.setState({ term });
	};
	filterPost = (items, filter) => {
		switch (filter) {
			case 'rise':
				return items.filter((item) => item.rise);
			case 'uptothousand':
				return items.filter((item) => item.salary >= 1000);
			default:
				return items;
		}
	};
	onFilterSelect = (filter) => {
		this.setState({ filter });
	};
	render() {
		const { data, term, filter } = this.state;
		const employees = data.length;
		const incrased = data.filter((item) => item.increase).length;
		const visibleData = this.filterPost(this.searchEmployee(data, term), filter);
		return (
			<div className="app">
				<AppInfo increased={incrased} employees={employees}></AppInfo>
				<div className="search-panel">
					<SearchPanel onUpdSearch={this.onUpdSearch} />
					<AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
				</div>
				<EmployeesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				></EmployeesList>
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}
export default App;
