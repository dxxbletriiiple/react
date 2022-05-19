import './employees-list.css';
// import { Component } from 'react';
import EmployeesListItem from '../employees-list-item/employees-list-item';
const EmployeesList = ({ data, onDelete, onToggleProp }) => {
	const elements = data.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<EmployeesListItem
				{...itemProps}
				key={id}
				onDelete={() => onDelete(id)}
				onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-attr'))}
			></EmployeesListItem>
		);
	});
	// console.log(elements);
	return <ul className="app-list list-group">{elements}</ul>;
};
export default EmployeesList;
