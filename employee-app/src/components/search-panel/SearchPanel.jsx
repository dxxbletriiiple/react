import { AppFilter } from '../app-filter/AppFilter';
import './SearchPanel.scss';

export const SearchPanel = () => {
	return (
		<div className="search_panel">
			<input type="text" className="form-control search-input" placeholder="Найти сотрудника" />
			<AppFilter />
		</div>
	);
};
