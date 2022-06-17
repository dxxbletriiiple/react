import { Component } from 'react';
import { MoviesList } from '../components/MoviesList';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';
const API_KEY = '57e5d2a6';

class Main extends Component {
	state = {
		movies: [],
		loading: true,
	};

	componentDidMount() {
		console.log(process.env);
		fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
			.then((response) => response.json())
			.then((data) => this.setState({ movies: data.Search, loading: false }))
			.catch((err) => {
				console.error(err);
				this.setState({ loading: false });
			});
	}

	searchMovies = (str, type = 'all') => {
		this.setState({ loading: true });
		fetch(
			`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
				type !== 'all' ? `&type=${type}` : ''
			}`,
		)
			.then((response) => response.json())
			.then((data) => this.setState({ movies: data.Search, loading: false }))
			.catch((err) => {
				console.error(err);
				this.setState({ loading: false });
			});
	};

	render() {
		const { movies, loading } = this.state;

		return (
			<main className='container content'>
				<Search searchMovies={this.searchMovies} />
				{loading ? <Preloader /> : <MoviesList movies={movies} />}
			</main>
		);
	}
}

export { Main };
