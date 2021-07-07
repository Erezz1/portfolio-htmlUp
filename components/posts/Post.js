import React from 'react';
import PropTypes from 'prop-types';
import { FaComment } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';

const Post = () => {
	return (
		<article className="post dark:bg-black dark:border-borderD">
			<div className="post-header">
				<div className="post-head dark:border-borderD">
					<h2 className="post-title dark:text-white">Magna sed adipiscing</h2>
					<h4 className="post-subtitle dark:text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
				</div>
				<div className="post-author-container">
					<p className="post-date dark:text-gray">November 1, 2015</p>

					<div className="post-author">
						<img
							className="post-author-image"
							src="https://via.placeholder.com/150"
							alt=""
						/>
						<p className="post-author-name dark:text-gray">Jane Doe</p>
					</div>
				</div>
			</div>

			<div className="post-image dark:border-borderD">
				<img
					className="w-full cursor-pointer"
					src="https://via.placeholder.com/400x180"
					alt=""
				/>
			</div>

			<div className="post-body">
				<p className="post-text dark:text-gray">Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>

				<div className="post-footer">
					<div className="post-reactions">
						<p className="post-reaction-general dark:text-white dark:border-borderD">General</p>
						<p className="post-reaction-button dark:text-white dark:border-borderD">
							<MdFavorite className="mr-1"/> 28
						</p>
						<p className="post-reaction-button dark:text-white dark:border-borderD">
							<FaComment className="mr-1"/> 128
						</p>
					</div>
					<button className="post-button dark:text-gray">Continue Reading</button>
				</div>
			</div>
		</article>
	)
}

Post.propTypes = {

}

export default Post;
