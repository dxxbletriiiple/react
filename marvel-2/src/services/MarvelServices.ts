/*  eslint-disable */
type URLs = { type: string; url: string };

type Comics = {
	available: number;
	collectionURI: string;
	items: Array<{
		name: string;
		resourceURI: string;
	}>;
};

type MarvelCharater = {
	name: string;
	description: string;
	thumbnail?: string;
	thumbnails?: { extension: string; path: string };
	homepage: string;
	wiki: string;
	id: string | number;
	comics2: Comics[];
	comics: [];
	urls: URLs[];
};

export class MarvelService {
	_baseUrl: string = `${process.env.REACT_APP_API_BASE}`;
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
		return this.getResource(
			`${this._baseUrl}characters?apikey=${this._apiKey}&ts=${this._TS}&hash=${this._hash}`,
		);
	};
	getCharacter = async (id: string) => {
		const res: any = this.getResource(
			`${this._baseUrl}characters${id}?apikey=${this._apiKey}&ts=${this._TS}&hash=${this._hash}`,
		);
		// return this._transformCharacter(res.data.results[0]);
	};

	/*
	_transformCharacter = ({
		name,
		description,
		thumbnail,
		thumbnails,
		urls,
		id,
		comics2,
		wiki,
	}: MarvelCharater) => {
		return {
			name,
			description: description
				? `${description.slice(0, 210)}...`
				: `There is no description about ${name}`,
			thumbnail: `${thumbnails?.path}.${thumbnails?.extension}`,
			homepage: urls[0].url,
			wiki: urls[1].url,
			id: id,
			comics: comics2.items,
			urls: [],
		};
	};*/
}
