import img1 from '../../assets/collections_1.jpg';
import img2 from '../../assets/collections_2.jpg';
import './Collections.scss';

export const Collections = () => {
	return (
		<div className='collections'>
			<h2 className='collections_header'>Collections</h2>
			<div className='content'>
				<img className='october' src={img1} alt='october' />
				<img className='autumn' src={img2} alt='autumn' />
				<video src='https://cdn.coverr.co/videos/coverr-browsing-in-a-fashion-store-4162/1080p.mp4'></video>
			</div>
		</div>
	);
};
