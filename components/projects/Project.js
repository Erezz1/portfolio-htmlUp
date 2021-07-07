import React from 'react';
import PropTypes from 'prop-types';

const Project = () => {
	return (
		<article className="project">
			<img
				className="project-image"
				src="/assets/images/pic06.jpg"
				alt=""
			/>
			<div className="project-body">
				<div>
					<p className="project-title">vitae sed condimentum</p>
					<p className="project-date">october 20, 2015</p>
				</div>
				<img
					className="project-author"
					src="/assets/images/avatar2.jpg"
					alt=""
				/>
			</div>
		</article>
	)
}

Project.propTypes = {

}

export default Project;
