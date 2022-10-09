import { Component } from 'react';
import { v4 } from 'uuid';
import { AppInfo } from '../app-info/AppInfo.jsx';
import { EmployeesAddForm } from '../employees-add-form/EmployeesAddForm.jsx';
import { EmployeesList } from '../employees-list/EmployeesList.jsx';
import { SearchPanel } from '../search-panel/SearchPanel.jsx';
import './App.scss';

export class App extends Component {
	state = {
		list: [
			{ name: 'John Smith', salary: 2000, increase: false, promotion: false, id: v4() },
			{ name: 'Rick Sanchez', salary: 3000, increase: true, promotion: false, id: v4() },
			{ name: 'Morty Smith', salary: 1000, increase: false, promotion: false, id: v4() },
			{ name: 'Summer Smith', salary: 40000, increase: false, promotion: false, id: v4() },
			{ name: 'Beth Smith', salary: 40000, increase: false, promotion: false, id: v4() },
			{ name: 'Jerry Smith', salary: 40000, increase: false, promotion: false, id: v4() },
			{ name: 'Michael Jackson', salary: 4_000_000, increase: false, promotion: false, id: v4() },
		],
		term: '',
	};
	deleteEmployee = (id) => {
		this.setState(({ list }) => ({
			list: list.filter((item) => item.id !== id),
		}));
	};
	addEmployee = (name, salary) => {
		const newEmployee = {
			name,
			salary,
			increase: false,
			promotion: false,
			id: v4(),
		};

		this.setState(({ list }) => {
			return {
				data: list.push(newEmployee),
			};
		});
	};

	onToggleData = (id, keys) => {
		this.setState(({ list }) => ({
			list: list.map((item) => (item.id === id ? { ...item, [keys]: !item[keys] } : item)),
		}));
	};
	onSearch = (items, term) => {
		if (items.length === 0) return items;
		return items.filter((item) => item.name.indexOf(term) > -1);
	};
	onUpdTerm = (term) => {
		this.setState({ term });
	};
	render() {
		const { state, onUpdTerm, onSearch, deleteEmployee, onToggleData, addEmployee } = this;
		const { list, term } = state;
		return (
			<div className="App">
				<AppInfo employeesCount={list.length} promoteCount={list.filter((i) => i.promotion).length} />
				<SearchPanel onUpdTerm={onUpdTerm} />
				<EmployeesList list={onSearch(list, term)} onDelete={deleteEmployee} onToggleData={onToggleData} />
				<EmployeesAddForm onAdd={addEmployee} />
			</div>
		);
	}
}
