import React from 'react';
import PropTypes from 'prop-types';

const Project = () => {
	return (
		<article className="project">
			<img
				className="project-image"
				src="https://via.placeholder.com/400x200"
				alt=""
			/>
			<div className="project-body">
				<div>
					<p className="project-title">vitae sed condimentum</p>
					<p className="project-date">october 20, 2015</p>
				</div>
				<img
					className="project-author"
					src="https://via.placeholder.com/150"
					alt=""
				/>
			</div>
		</article>
	)
}

Project.propTypes = {

}

export default Project;
