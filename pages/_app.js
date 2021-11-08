import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<SiteHeader />
			<Component {...pageProps} />
			<SiteFooter />
		</>
	);
}

export default MyApp;
