import './employees-list.css';
// import { Component } from 'react';
import EmployeesListItem from '../employees-list-item/employees-list-item';
const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {
	const elements = data.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<EmployeesListItem
				{...itemProps}
				key={id}
				onDelete={() => onDelete(id)}
				onToggleIncrease={() => onToggleIncrease(id)}
				onToggleRise={() => onToggleRise(id)}
			></EmployeesListItem>
		);
	});
	// console.log(elements);
	return <ul className="app-list list-group">{elements}</ul>;
};
export default EmployeesList;
