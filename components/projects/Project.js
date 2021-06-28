import React from 'react';
import PropTypes from 'prop-types';

const Project = () => {
	return (
		<article className="
			bg-white
			w-full
			mb-7
			border
			border-gray

			md:col-span-6
			md:mb-3

			xl:mb-10
		">
			<img
				className="
					w-full
					cursor-pointer
				"
				src="https://via.placeholder.com/400x200"
				alt=""
			/>
			<div className="
				flex
				items-center
				justify-between
				p-4
			">
				<div className="">
					<p className="
						font-bold
						uppercase
						font-raleway
						text-xs
						tracking-widest
						text-dark
						leading-7
						cursor-pointer
						transition-colors
						duration-300

						hover:text-primary

						2xl:text-sm
					">vitae sed condimentum</p>
					<p className="
						font-normal
						uppercase
						font-raleway
						text-xs
						tracking-widest
						text-muted
					">october 20, 2015</p>
				</div>
				<img
					className="
						w-10
						rounded-full
						cursor-pointer
					"
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
