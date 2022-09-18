import { v4 } from 'uuid';
import { AppInfo } from '../app-info/AppInfo.jsx';
import { EmployeesAddForm } from '../employees-add-form/EmployeesAddForm.jsx';
import { EmployeesList } from '../employees-list/EmployeesList.jsx';
import { SearchPanel } from '../search-panel/SearchPanel.jsx';
import './App.scss';

export const App = () => {
	const list = [
		{ name: 'John Smith', salary: 2000, increase: false, id: v4() },
		{ name: 'Rick Sanchez', salary: 3000, increase: true, id: v4() },
		{ name: 'Michael Jackson', salary: 40000, increase: false, id: v4() },
	];
	return (
		<div className="App">
			<AppInfo />
			<SearchPanel />
			<EmployeesList list={list} />
			<EmployeesAddForm />
		</div>
	);
};
