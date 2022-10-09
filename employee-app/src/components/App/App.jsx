import { Component } from 'react';
import { v4 } from 'uuid';
import { AppInfo } from '../app-info/AppInfo.jsx';
import { EmployeesAddForm } from '../employees-add-form/EmployeesAddForm';
import { EmployeesList } from '../employees-list/EmployeesList';
import { SearchPanel } from '../search-panel/SearchPanel';
import { AppFilter } from '../app-filter/AppFilter';
import './App.scss';

export class App extends Component {
	state = {
		list: [
			{ name: 'John Smith', salary: 400, increase: false, promotion: false, id: v4() },
			{ name: 'Rick Sanchez', salary: 3000, increase: true, promotion: false, id: v4() },
			{ name: 'Morty Smith', salary: 1000, increase: false, promotion: false, id: v4() },
			{ name: 'Summer Smith', salary: 40000, increase: false, promotion: false, id: v4() },
			{ name: 'Beth Smith', salary: 40000, increase: false, promotion: false, id: v4() },
			{ name: 'Jerry Smith', salary: 40000, increase: false, promotion: false, id: v4() },
			{ name: 'Michael Jackson', salary: 4_000_000, increase: false, promotion: false, id: v4() },
		],
		term: '',
		filter: 'all',
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

	filterList = (list, filter) => {
		switch (filter) {
			case 'increase':
				return list.filter((item) => item.increase);
			case 'overThousand':
				return list.filter((item) => item.salary >= 1000);
			default:
				return list;
		}
	};
	selectFilter = (filter) => {
		this.setState({ filter });
	};
	render() {
		const { state, onUpdTerm, onSearch, deleteEmployee, onToggleData, addEmployee, filterList, selectFilter } =
			this;
		const { list, term, filter } = state;
		return (
			<div className="App">
				<AppInfo employeesCount={list.length} promoteCount={list.filter((i) => i.promotion).length} />
				<div className="search_panel">
					<SearchPanel onUpdTerm={onUpdTerm} filterList={filterList} />
					<AppFilter filter={filter} selectFilter={selectFilter} />
				</div>
				<EmployeesList
					list={filterList(onSearch(list, term), filter)}
					onDelete={deleteEmployee}
					onToggleData={onToggleData}
				/>
				<EmployeesAddForm onAdd={addEmployee} />
			</div>
		);
	}
}
