import { useState, useEffect } from 'react';
import SwapiService from '../../services/SwapiServise';
import { Spinner } from '../Spinner/Spinner';
import { ErrorIndicator } from '../ErrorIndicator/ErrorIndicator';
import './RandomPlanet.scss';

export const RandomPlanet = () => {
	const [planet, setPlanet] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const sp = new SwapiService();

	useEffect(() => {
		const id = Math.floor(Math.random() * 60);
		sp.getPlanet(id)
			.then((res) => {
				setLoading(false);
				setPlanet(res);
			})
			.catch((e) => {
				setLoading(false);
				setError(true);
				console.log(e);
			});
	}, []);

	return (
		<div className='random-planet jumbotron rounded mb-3'>
			{loading ? <Spinner /> : null}
			{error ? <ErrorIndicator /> : null}
			{planet ? <View {...planet} /> : null}
		</div>
	);
};

const View = ({ id, name, population, rotationPeriod, diameter }) => {
	return (
		<>
			<img
				className='planet-image'
				src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
			/>
			<div>
				<h4>{name}</h4>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<span className='term'>Population</span>
						<span>{population}</span>
					</li>
					<li className='list-group-item'>
						<span className='term'>Rotation Period</span>
						<span>{rotationPeriod}</span>
					</li>
					<li className='list-group-item'>
						<span className='term'>Diameter</span>
						<span>{diameter}</span>
					</li>
				</ul>
			</div>
		</>
	);
};
