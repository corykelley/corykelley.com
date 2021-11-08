export default function SiteHeader() {
	return (
		<section className='site-header'>
			<div className='site-header__container'>
				<header className='mobile'>
					<div className='nav__hamburger'>+</div>
				</header>
				<header className='desktop'>
					<h1 className='nav__logo'>CK</h1>
					<nav className='nav__links'>
						<ul>
							<li>
								<a href='#'>Link1</a>
							</li>
							<li>
								<a href='#'>Link2</a>
							</li>
							<li>
								<a href='#'>Link3</a>
							</li>
						</ul>
					</nav>
				</header>
			</div>
		</section>
	);
}
