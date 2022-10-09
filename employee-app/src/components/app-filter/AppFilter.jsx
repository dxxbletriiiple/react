import './AppFilter.scss';
export const AppFilter = ({ filter, selectFilter }) => {
	const buttons = [
		{ name: 'all', text: 'Все сотрудники' },
		{ name: 'increase', text: 'На повышение' },
		{ name: 'overThousand', text: 'З/П больше 1000$' },
	];
	return (
		<div className="btn-group">
			{buttons.map(({ name, text }) => (
				<div
					className={`btn btn-${filter === name ? '' : 'outline-'}light`}
					type="button"
					onClick={() => selectFilter(name)}
					key={name}
				>
					{text}
				</div>
			))}
		</div>
	);
};
