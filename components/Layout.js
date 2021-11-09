import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

export default function Layout({ children }) {
	return (
		<div className='flex flex-col min-h-screen'>
			<SiteHeader />
			<main className='flex-grow'>{children}</main>
			<SiteFooter />
		</div>
	);
}
