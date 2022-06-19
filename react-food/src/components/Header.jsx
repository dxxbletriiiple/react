import { Link } from 'react-router-dom';

export function Header(params) {
	return (
		<nav className='blue accent-3' style={{ padding: '0 20px' }}>
			<div className='nav-wrapper'>
				<Link to='/' className='brand-logo'>
					React Food
				</Link>
				<ul id='nav-mobile' className='right hide-on-med-and-down'>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/contacts'>Contacts</Link>
					</li>
					<li>
						<a
							href='https://github.com/dxxbletriiiple/react'
							target='_blank'
							rel='noreferrer'
						>
							Repo
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
