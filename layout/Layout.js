import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useSelector } from 'react-redux';

import Header from './Header';
import Aside from './Aside';

const Layout = ({ children }) => {

	const { ui } = useSelector(state => state);
	const { showAside } = ui;

	return (
		<>
			<Head>
				<link 
					rel="preconnect" 
					href="https://fonts.gstatic.com"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;900&display=swap"
					rel="stylesheet"
				/>
				<title>Hola</title>
			</Head>

			<div className="absolute w-full bg-background">
				<Header />
				<Aside />

				<div className="mx-auto container">
					{ children }
				</div>
			</div>
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.array.isRequired
};

export default Layout;
