import React from 'react';
import PropTypes from 'prop-types';

import TimeCard from 'components/timeline/TimeCard';

const Timeline = () => {
	return (
		<section className="timeline">
			<TimeCard />
			<TimeCard />
			<TimeCard />
			<TimeCard />
			<TimeCard />
		</section>
	)
}

Timeline.propTypes = {

}

export default Timeline;
