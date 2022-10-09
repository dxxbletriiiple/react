import './EmployeesAddForm.scss';

export const EmployeesAddForm = ({ name, salary, onAdd }) => {
	// const { name, salary } = this.state;
	return (
		<div className="app_add_form">
			<h3>Добавьте нового сотрудника</h3>
			<form className="add_form d-flex">
				<input
					name="name"
					type="text"
					className="form-control new-post-label"
					placeholder="Как его зовут?"
					onChange={onAdd}
					value={name}
				/>
				<input
					name="salary"
					type="number"
					className="form-control new-post-label"
					placeholder="З/П в $?"
					onChange={onAdd}
					value={salary}
				/>

				<button type="submit" className="btn btn-outline-light" onClick={onAdd}>
					Добавить
				</button>
			</form>
		</div>
	);
};
