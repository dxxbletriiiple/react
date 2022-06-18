import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { GoodsList } from './GoodsList';
import { Preloader } from './Preloader';

export function Shop(params) {
	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(function GetGoods() {
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then((r) => r.json())
			.then((data) => setGoods(data));
	}, []);

	return (
		<main className='container content'>
			{loading ? <Preloader /> : <GoodsList goods={goods.shop} />}
		</main>
	);
}
