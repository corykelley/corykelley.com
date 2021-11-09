export default function SiteFooter() {
	return (
		<footer className='text-sm mt-10 py-6'>
			<div className='w-[80%] max-w-screen-xl mx-auto flex flex-col'>
				<div className='mb-4 text-center '>
					2021 © Cory Kelley. Made with ☕️, Next.js, MDX, and Tailwind.
				</div>
				<ul className='w-[90%] mx-auto flex justify-between font-semibold tracking-wide'>
					<li>
						<a href='https://twitter.com/corykelley_'>Twitter</a>
					</li>
					<li>
						<a href=''>LinkedIn</a>
					</li>
					<li>
						<a href=''>Github</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
