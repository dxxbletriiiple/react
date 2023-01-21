import { JustForYouItem } from '../JustForYouItem/JustForYouItem';
import './JustForYou.scss';

export const JustForYou = () => {
	return (
		<div className='just_for_you'>
			<h2 className='just_for_you_header headers'>Just for You</h2>
			<div className='devider'></div>
			<ul className='just_for_you_carousel'>
				<JustForYouItem
					imgUrl={
						'https://images.unsplash.com/photo-1673470743061-d4049079d980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
					}
					title={'Harris Tweed Three button Jacket'}
					price={'$120'}
				/>
			</ul>
		</div>
	);
};
