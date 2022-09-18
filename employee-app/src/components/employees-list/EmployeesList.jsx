import { EmployeesListItem } from '../employees-list-item/EmployeesListItem';
import './EmployeesList.scss';

export const EmployeesList = ({ list }) => {
	return (
		<div className="app_list list-group">
			{list.map((item) => (
				<EmployeesListItem {...item} key={item.id} />
			))}
		</div>
	);
};
