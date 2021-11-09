export default function SiteHeader() {
	return (
		<header className='mb-12 py-4'>
			<div className='w-[90%] max-w-screen-2xl mx-auto'>
				<div className='inline-block md:hidden'>
					<div>+</div>
				</div>
				<div className='hidden md:inline-block'>
					<h1>CK</h1>
					<nav>
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
				</div>
			</div>
		</header>
	);
}
