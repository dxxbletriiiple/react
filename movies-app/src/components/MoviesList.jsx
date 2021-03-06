import { Movie } from '../components/Movie';

export function MoviesList(props) {
	const { movies = [] } = props;

	return (
		<div className="movies">
			{movies.length ? (
				movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
			) : (
				<h4>Nothing found</h4>
			)}
		</div>
	);
}
