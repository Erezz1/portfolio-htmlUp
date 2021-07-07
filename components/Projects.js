import React from 'react';
import PropTypes from 'prop-types';

import Project from 'components/projects/Project';

const Projects = () => {
	return (
		<section className="projects-container dark:border-borderD">
			<Project />
			<Project />
			<Project />
			<Project />
		</section>
	)
}

Projects.propTypes = {

}

export default Projects;
