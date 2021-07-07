import React from 'react';
import PropTypes from 'prop-types';

const Title = () => {
	return (
		<>
			<div className="title-container">
				<a className="relative" href="">
					<img
						className="w-20 rounded-full"
						src="/assets/images/avatar.jpg"
						alt=""
					/>
				</a>
				<h1 className="title">Future Imperfect</h1>
				<h3 className="title-subtitle">Another fine responsive site template by html5 up</h3>
			</div>
		</>
	);
}

Title.propTypes = {

};

export default Title;
