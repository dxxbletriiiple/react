export class MarvelService {
	_baseUrl = `${process.env.REACT_APP_API_BASE}`;
	_apiKey = `${process.env.REACT_APP_API_KEY}`;
	_hash = `${process.env.REACT_APP_API_HASH}`;
	_TS = `${process.env.REACT_APP_API_TS}`;

	getResource = async (url) => {
		let res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}
		return await res.json();
	};

	getAllResources = async (offset = 0) => {
		const res = await this.getResource(
			`${this._baseUrl}characters?limit=9&offset=${offset}&apikey=${this._apiKey}&ts=${this._TS}&hash=${this._hash}`,
		);
		return res.data.results.map(this._transformCharacter);
	};
	getCharacter = async (id) => {
		const res = await this.getResource(
			`${this._baseUrl}characters/${id}?apikey=${this._apiKey}&ts=${this._TS}&hash=${this._hash}`,
		);
		return this._transformCharacter(res.data.results[0]);
	};

	_transformCharacter = ({ name, description, thumbnail, urls, id, comics }) => {
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
}
