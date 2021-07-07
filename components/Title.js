import React from 'react';
import PropTypes from 'prop-types';

const Title = () => {
	return (
		<>
			<div className="title-container dark:border-borderD">
				<a className="relative" href="">
					<img
						className="w-20 rounded-full"
						src="https://via.placeholder.com/150"
						alt=""
					/>
				</a>
				<h1 className="title dark:text-white">Future Imperfect</h1>
				<h3 className="title-subtitle dark:text-gray">Another fine responsive site template by html5 up</h3>
			</div>
		</>
	);
}

Title.propTypes = {

};

export default Title;
