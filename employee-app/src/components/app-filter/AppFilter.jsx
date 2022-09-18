import './AppFilter.scss';
export const AppFilter = () => {
	return (
		<div className="btn-group">
			<div className="btn btn-light" type="button">
				Все сотрудники
			</div>
			<div className="btn btn-outline-light" type="button">
				На повышение
			</div>
			<div className="btn btn-outline-light" type="button">
				З/П больше 1000$
			</div>
		</div>
	);
};
