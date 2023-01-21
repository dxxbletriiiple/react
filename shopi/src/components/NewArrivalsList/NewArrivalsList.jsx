import { NewArrivalsItem } from '../NewArrivalsItem/NewArrivalsItem';
import './NewArrivalsList.scss';

export const NewArrivalsList = ({ arrivalsList }) => {
	return (
		<div className='new_arrivals'>
			<h2 className='new_arrivals_header headers'>New Arrival</h2>
			<div className='devider'></div>
			<nav>
				<ul>
					<li>
						<a href='!'>All</a>
					</li>
					<li>
						<a href='!'>Apparel</a>
					</li>
					<li>
						<a href='!'>Dress</a>
					</li>
					<li>
						<a href='!'>Tshirt</a>
					</li>
					<li>
						<a href='!'>Bag</a>
					</li>
				</ul>
			</nav>
			<ul className='new_arrivals_list'>
				<NewArrivalsItem name={'21WN reversible angora cardigan'} price={'$160'} />
				<NewArrivalsItem name={'21WN reversible angora cardigan'} price={'$160'} />
				<NewArrivalsItem name={'21WN reversible angora cardigan'} price={'$160'} />
				<NewArrivalsItem name={'21WN reversible angora cardigan'} price={'$160'} />
				<NewArrivalsItem name={'something'} price={'$160'} />
				<NewArrivalsItem name={'something'} price={'$160'} />
			</ul>
			<div className='new_arrivals_explore'>
				<a href='!'>Explore More</a>
			</div>
		</div>
	);
};
