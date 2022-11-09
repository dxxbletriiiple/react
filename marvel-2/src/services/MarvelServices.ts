/*  eslint-disable */
type MarvelCharater {
	name: string
}
export class MarvelService {
	_baseUrl: string = 'https://gateway.marvel.com/v1/public/';
	_apiKey: string = `${process.env.REACT_APP_API_KEY}`;
	_hash: string = `${process.env.REACT_APP_API_HASH}`;
	_TS: string = `${process.env.REACT_APP_API_TS}`;

	getResource = async (url: string):any => {
		let res: any = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	};
	getAllResources = () => {
		return this.getResource(
			`${this._baseUrl}characters?apikey=${this._apiKey}&ts=${this._TS}&hash=${this._hash}`,
		);
	};
	getCharacter = async (id: string) => {
		const res: any = this.getResource(
			`${this._baseUrl}characters${id}?apikey=${this._apiKey}&ts=${this._TS}&hash=${this._hash}`,
		);
		// const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
		return this._transformCharacter(res.data.results[0]);
	};

	_transformCharacter = (char: object) => {
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
