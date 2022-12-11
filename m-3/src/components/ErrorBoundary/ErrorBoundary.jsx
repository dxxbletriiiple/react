import { Component } from 'react';
import { Error } from '../Error/Error';

export class ErrorBoundary extends Component {
	state = {
		error: false,
	};
	static getD;
	componentDidCatch(err, errInfo) {
		console.log(err, errInfo);
		this.setState({ error: true });
	}
	render() {
		return this.state.error ? (
			<>
				<h1>Something went wrong</h1>
				<Error />
			</>
		) : (
			this.props.children
		);
	}
}
