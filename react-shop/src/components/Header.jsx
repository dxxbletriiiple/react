export function Header(params) {
	return (
		<nav className='blue accent-3' style={{ padding: '0 20px' }}>
			<div className='nav-wrapper'>
				<a href='#qw' className='brand-logo'>
					React Shop
				</a>
				<ul id='nav-mobile' className='right hide-on-med-and-down'>
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
