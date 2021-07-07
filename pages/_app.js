import React from 'react';
import { wrapper } from 'ducks/store';

import 'styles/global.css';
import 'animate.css';

function MyApp({ Component, pageProps }) {
	return <Component { ...pageProps } />;
}

export default wrapper.withRedux(MyApp);
