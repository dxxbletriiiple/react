import { useEffect, useState } from 'react';
import SwapiSevice from '../../services/SwapiService';
import { Spinner } from '../Spinner/Spinner';
import './ItemList.scss';

export const ItemList = () => {
	const [peopleList, setPeopleList] = useState(null);
	const sp = new SwapiSevice();

	useEffect(() => {
		sp.getAllPeople().then(setPeopleList);
	}, []);

	return (
		<ul className='item-list list-group'>
			{peopleList ? peopleList.map((el, i) => <View name={el.name} key={i} />) : <Spinner />}
		</ul>
	);
};

const View = ({ name, id }) => {
	return <li className='list-group-item'>{name}</li>;
};
