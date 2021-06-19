import React from 'react';
import PropTypes from 'prop-types';

import Header from 'layout/Header';
import Aside from 'layout/Aside';
import Navbar from 'layout/Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<Aside />
			<Navbar />

			{
				children
			}
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.element.isRequired
};

export default Layout;
