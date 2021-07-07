import React from 'react';
import PropTypes from 'prop-types';
import { FaComment } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';

const Post = () => {
	return (
		<article className="post">
			<div className="post-header">
				<div className="post-head">
					<h2 className="post-title">Magna sed adipiscing</h2>
					<h4 className="post-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
				</div>
				<div className="post-author-container">
					<p className="post-date">November 1, 2015</p>

					<div className="post-author">
						<img
							className="post-author-image"
							src="/assets/images/avatar2.jpg"
							alt=""
						/>
						<p className="post-author-name">Jane Doe</p>
					</div>
				</div>
			</div>

			<div className="post-image">
				<img
					className="w-full cursor-pointer"
					src="/assets/images/pic01.jpg"
					alt=""
				/>
			</div>

			<div className="post-body">
				<p className="post-text">Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>

				<div className="post-footer">
					<div className="post-reactions">
						<p className="post-reaction-general">General</p>
						<p className="post-reaction-button ">
							<MdFavorite className="mr-1"/> 28
						</p>
						<p className="post-reaction-button">
							<FaComment className="mr-1"/> 128
						</p>
					</div>
					<button className="post-button">Continue Reading</button>
				</div>
			</div>
		</article>
	)
}

Post.propTypes = {

}

export default Post;
