import { useContext } from 'react';
import { peopleContext } from '../../contexts/contexts';
import './PersonDetails.scss';

export const PersonDetails = () => {
	const {
		selectedPerson: { id, name, gender, eyeColor, birthYear },
	} = useContext(peopleContext);
	return (
		<div className='person-details card'>
			<img className='person-image' src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

			<div className='card-body'>
				<h4>{name}</h4>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<span className='term'>Gender</span>
						<span>{gender}</span>
					</li>
					<li className='list-group-item'>
						<span className='term'>Birth Year</span>
						<span>{birthYear}</span>
					</li>
					<li className='list-group-item'>
						<span className='term'>Eye Color</span>
						<span>{eyeColor}</span>
					</li>
				</ul>
			</div>
		</div>
	);
};
