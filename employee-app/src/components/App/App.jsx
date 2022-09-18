import { AppInfo } from '../app-info/AppInfo.jsx';
import { EmployeesAddForm } from '../employees-add-form/EmployeesAddForm.jsx';
import { EmployeesList } from '../employees-list/EmployeesList.jsx';
import { SearchPanel } from '../search-panel/SearchPanel.jsx';
import './App.scss';

const App = () => {
	return (
		<div className="App">
			<AppInfo />
			<SearchPanel />
			<EmployeesList />
			<EmployeesAddForm />
		</div>
	);
};

export default App;
