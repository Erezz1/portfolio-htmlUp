import React from 'react';
import PropTypes from 'prop-types';

import Project from 'components/projects/Project';

const Projects = () => {
	return (
		<section className="
			mx-5
			pt-10
			pb-3
			border-t
			border-gray

			md:grid
			md:grid-cols-12
			md:gap-6
			md:m-0
			md:pb-10

			xl:inline-block
			xl:border-none
			xl:w-1/4
			xl:float-left
		">
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
