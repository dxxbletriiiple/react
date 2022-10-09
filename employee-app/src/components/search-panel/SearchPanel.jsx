import { Component } from 'react';
import { AppFilter } from '../app-filter/AppFilter';
import './SearchPanel.scss';

export class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
		};
	}
	updTerm = (e) => {
		this.setState({ term: e.target.value });
		this.props.onUpdTerm(e.target.value);
	};
	render() {
		return (
			<div className="search_panel">
				<input
					type="text"
					className="form-control search-input"
					placeholder="Найти сотрудника"
					onChange={this.updTerm}
					value={this.state.term}
				/>
				<AppFilter />
			</div>
		);
	}
}
