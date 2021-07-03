import React from 'react';

import Layout from 'layout/Layout';
import Title from 'components/Title';
import Posts from 'components/Posts';
import Projects from 'components/Projects';
import Timeline from 'components/Timeline';
import About from 'components/About';
import Social from 'components/Social';

const Home = () => {
	return (
		<Layout>
			<Title />
			<Posts />
			<Projects />
			<Timeline />
			<About />
			<Social />
		</Layout>
	);
}

export default Home;
