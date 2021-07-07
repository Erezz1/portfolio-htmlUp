import React from 'react';
import PropTypes from 'prop-types';

const TimeCard =() => {
	return (
		<article className="timeline-card dark:border-borderD">
			<img
				className="timeline-card-image"
				src="https://via.placeholder.com/150"
				alt=""
			/>
			<div className="timeline-card-body">
				<h4 className="timeline-title dark:text-background">Lorem ipsum dolor sit amet consectetur.</h4>

				<p className="timeline-date dark:text-gray">october 20, 2015</p>
			</div>
		</article>
	)
}

TimeCard.propTypes = {

}

export default TimeCard;
