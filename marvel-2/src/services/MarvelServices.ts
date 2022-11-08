export class MarvelService {
	_baseUrl: string = 'https://gateway.marvel.com/v1/public/';
	_apiKey: string = `${process.env.REACT_APP_API_KEY}`;
	_hash: string = `${process.env.REACT_APP_API_HASH}`;
	_TS: string = `${process.env.REACT_APP_API_TS}`;

	getResource = async (url: string) => {
		let res: any = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	};
	getAllResources = () => {
		console.log(
			`${this._baseUrl}characters?apikey=${this._apiKey}&ts=${this._TS}&hash=${this._hash}`,
		);
		return this.getResource(
			`${this._baseUrl}characters?apikey=${this._apiKey}&ts=${this._TS}&hash=${this._hash}`,
		);
	};
}
