import React from 'react';
import PropTypes from 'prop-types';

const TimeCard =() => {
	return (
		<article className="timeline-card">
			<img
				className="timeline-card-image"
				src="https://via.placeholder.com/150"
				alt=""
			/>
			<div className="timeline-card-body">
				<h4 className="timeline-title">Lorem ipsum dolor sit amet consectetur.</h4>

				<p className="timeline-date">october 20, 2015</p>
			</div>
		</article>
	)
}

TimeCard.propTypes = {

}

export default TimeCard;
