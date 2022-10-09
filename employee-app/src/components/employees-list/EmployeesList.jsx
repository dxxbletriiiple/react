import { EmployeesListItem } from '../employees-list-item/EmployeesListItem';
import './EmployeesList.scss';

export const EmployeesList = ({ list, onDelete, onToggleData }) => {
	return (
		<div className="app_list list-group">
			{list.map((item) => (
				<EmployeesListItem
					{...item}
					key={item.id}
					onDelete={() => onDelete(item.id)}
					onToggleData={(keys) => {
						onToggleData(item.id, keys);
					}}
				/>
			))}
		</div>
	);
};
