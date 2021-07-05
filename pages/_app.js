import React from 'react';
import { wrapper } from 'ducks/store';

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
	return <Component { ...pageProps } />;
}

export default wrapper.withRedux(MyApp);
