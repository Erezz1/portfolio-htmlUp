import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from 'layout/Header';
import Aside from 'layout/Aside';
import Navbar from 'layout/Navbar';

const Layout = ({ children }) => {

	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;900&display=swap" rel="stylesheet" />
				<title>Hola</title>
			</Head>

			<div className="absolute w-full">
				<Header />

				<div className="bg-background container">
					{/* <Aside />
					<Navbar /> */}
					{
						children
					}
				</div>
			</div>
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.array.isRequired
};

export default Layout;
