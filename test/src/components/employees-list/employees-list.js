import './employees-list.css';
// import { Component } from 'react';
import EmployeesListItem from '../employees-list-item/employees-list-item';
const EmployeesList = ({ data }) => {
	const elements = data.map((item, index) => (
		<EmployeesListItem {...item} key={index}></EmployeesListItem>
	));
	// console.log(elements);
	return <ul className="app-list list-group">{elements}</ul>;
};
export default EmployeesList;
