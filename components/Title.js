import React from 'react';
import PropTypes from 'prop-types';

const Title = () => {
	return (
		<>
			<div className="title-container">
				<a className="relative" href="">
					<img
						src="https://via.placeholder.com/150"
						alt=""
					/>
				</a>
				<h1 className="title">Future Imperfect</h1>
				<h3 className="title-subtitle">Another fine responsive site template by html5 up</h3>
			</div>

			<style jsx>{`
				a::before {
					background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75px' height='75px' viewBox='0 0 100 100' preserveAspectRatio='none' zoomAndPan='disable'%3E%3Cpolygon points='0,0 100,0 100,25 50,0 0,25' style='fill:%23f4f4f4' /%3E%3Cpolygon points='0,100 100,100 100,75 50,100 0,75' style='fill:%23f4f4f4' /%3E%3C/svg%3E");
					background-position: top left;
					background-repeat: no-repeat;
					content: '';
					display: block;
					height: 100%;
					left: 0;
					position: absolute;
					top: 0;
					width: 100%;
				}

				img {
					width: 4.7rem;
				}
			`}</style>
		</>
	);
}

Title.propTypes = {

};

export default Title;
