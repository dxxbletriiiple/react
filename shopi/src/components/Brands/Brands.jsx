import './Brands.scss';
import svg from '../../assets/sprite.svg';
export const Brands = () => {
	return (
		<div className='brands'>
			<div className='devider'></div>
			<ul className='brands_list'>
				<li>
					<a href='!'>
						<svg class='icon' role='img' style={{ width: '70px', height: '30px' }}>
							<use xlinkHref={`${svg}#prada`}></use>
						</svg>
					</a>
				</li>
				<li>
					<a href='!'>
						<svg class='icon' role='img' style={{ width: '100px', height: '30px' }}>
							<use xlinkHref={`${svg}#burberry`}></use>
						</svg>
					</a>
				</li>
				<li>
					<a href='!'>
						<svg class='icon' role='img' style={{ width: '54px', height: '30px' }}>
							<use xlinkHref={`${svg}#boss`}></use>
						</svg>
					</a>
				</li>
				<li>
					<a href='!'>
						<svg class='icon' role='img' style={{ width: '72px', height: '30px' }}>
							<use xlinkHref={`${svg}#cartier`}></use>
						</svg>
					</a>
				</li>
				<li>
					<a href='!'>
						<svg class='icon' role='img' style={{ width: '96px', height: '30px' }}>
							<use xlinkHref={`${svg}#gucci`}></use>
						</svg>
					</a>
				</li>
				<li>
					<a href='!'>
						<svg class='icon' role='img' style={{ width: '96px', height: '30px' }}>
							<use xlinkHref={`${svg}#tiffany`}></use>
						</svg>
					</a>
				</li>
			</ul>
			<div className='devider'></div>
		</div>
	);
};
