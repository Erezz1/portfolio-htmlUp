import React from 'react';

import Layout from 'layout/Layout';
import Title from 'components/Title';
import Posts from 'components/Posts';
import Projects from 'components/Projects';

const Home = () => {
	return (
		<Layout>
			<Title />
			<Posts />
			<Projects />
		</Layout>
	);
}

export default Home;
