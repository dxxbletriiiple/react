import './employees-add-form.css';
import { Component } from 'react';
class EmployeesAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			salary: '',
		};
	}
	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	render() {
		const { name, salary } = this.state;
		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form className="add-form d-flex">
					<input
						type="text"
						name="name"
						className="form-control new-post-label"
						placeholder="Как его зовут?"
						onChange={(e) => this.onValueChange(e)}
						value={name}
					/>
					<input
						type="number"
						name="salary"
						className="form-control new-post-label"
						placeholder="З/П в $?"
						onChange={(e) => this.onValueChange(e)}
						value={salary}
					/>

					<button type="submit" className="btn btn-outline-light">
						Добавить
					</button>
				</form>
			</div>
		);
	}
}
export default EmployeesAddForm;
