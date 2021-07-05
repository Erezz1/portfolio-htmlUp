import React from 'react';
import { MdFavorite } from 'react-icons/md';
import { FaComment } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import {
	AiOutlineTwitter,
	AiFillFacebook,
	AiFillInstagram,
	AiOutlineGithub
} from 'react-icons/ai';

import Layout from 'layout/Layout';

const Post = () => {
	return (
		<Layout>
			<div className="pt-10 lg:pt-20 lg:px-10">
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
									src="https://via.placeholder.com/150"
									alt=""
								/>
								<p className="post-author-name">Jane Doe</p>
							</div>
						</div>
					</div>

					<div className="post-image">
						<img
							className="w-full cursor-pointer"
							src="https://via.placeholder.com/400x180"
							alt=""
						/>
					</div>

					<div className="post-body">
						<p className="post-text 2xl:text-base">
							Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
							<br /><br />Nunc quis dui scelerisque, scelerisque urna ut, dapibus orci. Sed vitae condimentum lectus, ut imperdiet quam. Maecenas in justo ut nulla aliquam sodales vel at ligula. Sed blandit diam odio, sed fringilla lectus molestie sit amet. Praesent eu tortor viverra lorem mattis pulvinar feugiat in turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce ullamcorper tellus sit amet mattis dignissim. Phasellus ut metus ligula. Curabitur nec leo turpis. Ut gravida purus quis erat pretium, sed pellentesque massa elementum. Fusce vestibulum porta augue, at mattis justo. Integer sed sapien fringilla, dapibus risus id, faucibus ante. Pellentesque mattis nunc sit amet tortor pellentesque, non placerat neque viverra.
						</p>

						<div className="post-reactions justify-start">
							<p className="post-reaction-general pl-0">General</p>
							<p className="post-reaction-button">
								<MdFavorite className="mr-1"/> 28
							</p>
							<p className="post-reaction-button">
								<FaComment className="mr-1"/> 128
							</p>
						</div>
					</div>
				</article>
			</div>

			<div className="mb-20">
				<div className="social-container justify-center">
					<AiOutlineTwitter className="social-logo flex justify-center m-0 mx-2" />
					<AiFillFacebook className="social-logo flex justify-center m-0 mx-2" />
					<AiFillInstagram className="social-logo flex justify-center m-0 mx-2" />
					<GrMail className="social-logo flex justify-center m-0 mx-2" />
					<AiOutlineGithub className="social-logo flex justify-center m-0 mx-2" />
				</div>
				<p className="social-copy text-center">&copy; diseño por <a className="social-link" target="_blank" href="https://html5up.net/">html5up</a></p>
			</div>
		</Layout>
	)
}

export default Post;
