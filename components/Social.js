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
		<section className="
			mx-5
			py-10
			border-t
			border-gray

			md:mx-0
			xl:w-1/4
			xl:float-left
		">
			<div className="
				flex
				text-icons
				text-xl
				mb-8

				2xl:text-2xl
			">
				<AiOutlineTwitter className="
					mr-3
					transition-colors
					durations-300
					cursor-pointer

					hover:text-primary

					xl:mr-5
				" />
				<AiFillFacebook className="
					mr-3
					transition-colors
					durations-300
					cursor-pointer

					hover:text-primary

					xl:mr-5
				" />
				<AiFillInstagram className="
					mr-3
					transition-colors
					durations-300
					cursor-pointer

					hover:text-primary

					xl:mr-5
				" />
				<GrMail className="
					mr-3
					transition-colors
					durations-300
					cursor-pointer

					hover:text-primary

					xl:mr-5
				" />
				<AiOutlineGithub className="
					mr-3
					transition-colors
					durations-300
					cursor-pointer

					hover:text-primary

					xl:mr-5
				" />
			</div>
			<p className="
				text-xs
				tracking-wider
				font-raleway
				text-muted
				uppercase
			">&copy; diseño por <a className="cursor-pointer transition-colors duration-300 hover:text-primary" target="_blank" href="https://html5up.net/">html5up</a></p>
		</section>
	)
}

Social.propTypes = {

}

export default Social;
