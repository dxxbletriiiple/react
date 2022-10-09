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

	render() {
		const { list } = this.state;
		return (
			<div className="App">
				<AppInfo />
				<SearchPanel />
				<EmployeesList list={list} onDelete={this.deleteEmployee} onToggleData={this.onToggleData} />
				<EmployeesAddForm onAdd={this.addEmployee} />
			</div>
		);
	}
}
