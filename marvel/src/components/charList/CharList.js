import { Component } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';
import './charList.scss';

class CharList extends Component {
	state = {
		charList: [],
		loading: true,
		error: false,
		itemsLoading: false,
		offset: 210,
		charEnded: false,
	};

	marvelService = new MarvelService();

	componentDidMount() {
		this.onRequest();
	}

	onCharListLoaded = (newCharList) => {
		this.setState(({ offset, charList }) => ({
			charList: [...charList, ...newCharList],
			loading: false,
			itemsLoading: false,
			offset: offset + 9,
			charEnded: newCharList < 9,
		}));
	};

	onCharListLoading = () => {
		this.setState({ itemsLoading: true });
	};
	onError = () => {
		this.setState({
			error: true,
			loading: false,
		});
	};

	onRequest = (offset) => {
		this.onCharListLoading();
		this.marvelService.getAllCharacters(offset).then(this.onCharListLoaded).catch(this.onError);
	};

	renderItems(arr) {
		const items = arr.map((item) => {
			let imgStyle = item.thumbnail.includes('image_not_available')
				? { objectFit: 'unset' }
				: { objectFit: 'cover' };

			return (
				<li
					className="char__item"
					key={item.id}
					onClick={() => this.props.onCharSelected(item.id)}
				>
					<img src={item.thumbnail} alt={item.name} style={imgStyle} />
					<div className="char__name">{item.name}</div>
				</li>
			);
		});
		return <ul className="char__grid">{items}</ul>;
	}

	render() {
		const { charList, loading, error, itemsLoading, offset, charEnded } = this.state;

		const items = this.renderItems(charList);

		const errorMessage = error ? <ErrorMessage /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = !(loading || error) ? items : null;

		return (
			<div className="char__list">
				{errorMessage}
				{spinner}
				{content}
				<button
					className="button button__main button__long"
					disabled={itemsLoading}
					onClick={() => this.onRequest(offset)}
					style={{ display: charEnded ? 'none' : 'block' }}
				>
					<div className="inner">load more</div>
				</button>
			</div>
		);
	}
}

export default CharList;
