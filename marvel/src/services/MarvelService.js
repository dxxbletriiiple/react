require('dotenv').config();

class MarvelService {
	_apiBase = 'https://gateway.marvel.com:443/v1/public/';
	_baseOffset = 210;
	// ЗДЕСЬ БУДЕТ ВАШ КЛЮЧ, ЭТОТ КЛЮЧ МОЖЕТ НЕ РАБОТАТЬ
	_apiKey = process.env.REACT_APP_APIKEY;

	getResource = async (url) => {
		let res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	};

	getAllCharacters = async (offset = this._baseOffset) => {
		const res = await this.getResource(
			`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`,
		);
		return res.data.results.map(this._transformCharacter);
	};

	getCharacter = async (id) => {
		const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
		return this._transformCharacter(res.data.results[0]);
	};
	_transformCharacter = (char) => {
		return {
			name: char.name,
			description: char.description
				? `${char.description.slice(0, 210)}...`
				: `There is no description about ${char.name}`,
			thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
			homepage: char.urls[0].url,
			wiki: char.urls[1].url,
			id: char.id,
			comics: char.comics.items,
		};
	};
}
// let x ='https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=ca0ef891c5f78c079adf43895a39ccc5';
export default MarvelService;
