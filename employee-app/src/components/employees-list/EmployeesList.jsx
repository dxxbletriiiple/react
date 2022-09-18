import { EmployeesListItem } from '../employees-list-item/EmployeesListItem';
import './EmployeesList.scss';

export const EmployeesList = () => {
	return (
		<div className="app_list list-group">
			<EmployeesListItem />
			<EmployeesListItem />
			<EmployeesListItem />
		</div>
	);
};
