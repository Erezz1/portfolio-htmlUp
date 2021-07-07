import React from 'react';
import PropTypes from 'prop-types';

import Post from 'components/posts/Post';

const Posts = () => {
	return (
		<section className="posts-container">
			<Post />
			<Post />
			<Post />

			<div className="post-buttons">
				<button className="post-button" disabled>previus page</button>
				<button className="post-button md:ml-5">next page</button>
			</div>
		</section>
	)
}

Posts.propTypes = {

}

export default Posts;;
