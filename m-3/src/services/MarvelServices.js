import { useHttp } from '../hooks/http.hook';

export const useMarvelService = () => {
	const { loading, req, error, clearError } = useHttp();
	const _baseUrl = `${process.env.REACT_APP_API_BASE}`;
	const _apiKey = `${process.env.REACT_APP_API_KEY}`;
	const _hash = `${process.env.REACT_APP_API_HASH}`;
	const _TS = `${process.env.REACT_APP_API_TS}`;

	const getAllResources = async (offset = 0) => {
		const res = await req(
			`${_baseUrl}characters?limit=9&offset=${offset}&apikey=${_apiKey}&ts=${_TS}&hash=${_hash}`,
		);
		return res.data.results.map(_transformCharacter);
	};
	const getCharacter = async (id) => {
		const res = await req(
			`${_baseUrl}characters/${id}?apikey=${_apiKey}&ts=${_TS}&hash=${_hash}`,
		);
		return _transformCharacter(res.data.results[0]);
	};

	const getComic = async (id) => {
		const res = await req(`${_baseUrl}comics/${id}?apikey=${_apiKey}&ts=${_TS}&hash=${_hash}`);
		return _transformComics(res.data.results[0]);
	};
	const getAllComics = async (offset = 0) => {
		const res = await req(
			`${_baseUrl}comics?orderBy=issueNumber&limit=8&offset=${offset}&apikey=${_apiKey}&ts=${_TS}&hash=${_hash}`,
		);
		return res.data.results.map(_transformComics);
	};
	const _transformCharacter = ({ name, description, thumbnail, urls, id, comics }) => {
		return {
			id,
			name,
			description: description
				? `${description.slice(0, 230)}...`
				: `There is no description about ${name}`,
			thumbnail: `${thumbnail?.path}.${thumbnail?.extension}`,
			homepage: urls[0].url,
			wiki: urls[1].url,
			comics: comics.items,
		};
	};

	const _transformComics = (comics) => {
		return {
			id: comics.id,
			title: comics.title,
			description: comics.description || 'There is no description',
			pageCount: comics.pageCount
				? `${comics.pageCount} p.`
				: 'No information about the number of pages',
			thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
			language: comics.textObjects.language || 'en-us',
			price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'not available',
		};
	};
	return { loading, error, getAllResources, getCharacter, getAllComics, getComic, clearError };
};
