require('dotenv').config();

export class MarvelService {
	_apiBase = 'https://gateway.marvel.com:443/v1/public/';
	_apiKey = process.env.APIKEY;
}
console.log(new MarvelService()._apiKey);
