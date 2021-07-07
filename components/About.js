import React from 'react';
import PropTypes from 'prop-types';

const About = () => {
	return (
		<section className="about-section dark:border-borderD">
			<h3 className="about-title dark:text-white">about</h3>
			<p className="about-description dark:text-gray">Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod amet placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at phasellus sed ultricies.</p>
			<button className="about-button dark:text-white">learn more</button>
		</section>
	)
}

About.propTypes = {

}

export default About;

