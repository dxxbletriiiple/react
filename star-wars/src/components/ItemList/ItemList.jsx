import { useEffect, useState, useContext } from 'react';
import { context } from '../../context/context';
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
			{peopleList ? peopleList.map((el, i) => <View {...el} key={i} />) : <Spinner />}
		</ul>
	);
};

const View = (props) => {
	const { onPersonSelected } = useContext(context);

	return (
		<li className='list-group-item' onClick={() => onPersonSelected(props)}>
			{props.name}
		</li>
	);
};
