import './EmployeesListItem.scss';

export const EmployeesListItem = ({ name, salary, onDelete, increase, promotion, onToggleData }) => {
	return (
		<li
			className={`list-group-item d-flex justify-content-between${increase ? ' increase' : ''}
				${promotion ? ' like' : ''}`}
		>
			<span className="list-group-item-label" onClick={() => onToggleData('increase')}>
				{name}
			</span>
			<input type="text" className="list-group-item-input" defaultValue={`${salary}$`} />
			<div className="d-flex justify-content-center align-items-center">
				<button type="button" className="btn-cookie btn-sm" onClick={() => onToggleData('promotion')}>
					<i className="fas fa-cookie"></i>
				</button>

				<button type="button" className="btn-trash btn-sm" onClick={onDelete}>
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>
			</div>
		</li>
	);
};
