import React from 'react';
import PropTypes from 'prop-types';
import { GrMail } from 'react-icons/gr'
import {
	AiOutlineTwitter,
	AiFillInstagram,
	AiOutlineGithub,
	AiFillFacebook
} from 'react-icons/ai';

const Social = () => {
	return (
		<section className="social dark:border-borderD">
			<div className="social-container">
				<AiOutlineTwitter className="social-logo" />
				<AiFillFacebook className="social-logo" />
				<AiFillInstagram className="social-logo" />
				<GrMail className="social-logo" />
				<AiOutlineGithub className="social-logo" />
			</div>

			<p className="social-copy dark:text-white">&copy; diseño por <a className="social-link" target="_blank" href="https://html5up.net/">html5up</a></p>
		</section>
	)
}

Social.propTypes = {

}

export default Social;
