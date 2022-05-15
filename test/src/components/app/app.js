import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
// import EmployeesListItem from '../employees-list-item/employees-list-item';

function App() {
	const data = [
		{ name: 'John C.', salary: 800 },
		{ name: 'Alex M.', salary: 3000 },
		{ name: 'Carl W.', salary: 5000 },
	];
	return (
		<div className="app">
			<AppInfo></AppInfo>
			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>
			<EmployeesList data={data}></EmployeesList>
			<EmployeesAddForm />
		</div>
	);
}
export default App;
