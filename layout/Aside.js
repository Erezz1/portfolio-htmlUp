import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { BiSearchAlt2 } from 'react-icons/bi';

import { setShowAside } from 'ducks/actions/ui';

const Aside = () => {

	const dispatch = useDispatch();
	const { showAside } = useSelector(state => state.ui);

	const handleHiddenAside = () => {
		dispatch(setShowAside(false));
	}

	const handleSetDarkMode = () => {
		const html = document.querySelector('html');
		html.classList.toggle('dark');
	}

	return (
		<>
			<div
				className={`background-aside animate__animated animate__faster ${showAside ? 'animate__fadeIn block' : 'animate__fadeOut hidden'}`}
				onClick={handleHiddenAside}
			></div>
			<aside className={`aside animate__animated animate__faster ${showAside ? 'animate__fadeInRight' : 'animate__fadeOutRight'}`}>

				<form className="aside-header">
					<div className="aside-header-container">
						<label className="aside-search" htmlFor="search">
							<BiSearchAlt2 />
						</label>
						<input className="aside-input" placeholder="Search" type="text" name="" id="search" />
					</div>
				</form>

				<nav className="aside-navigation">
					<div className="aside-navigation-container">
						<div className="aside-link">
							<h3 className="aside-link-title">Lorem ipsum</h3>
							<p className="aside-link-subtitle">feugiat tempus veroeros dolor</p>
						</div>
					</div>
					<div className="aside-navigation-container py-6">
						<div className="aside-link">
							<h3 className="aside-link-title">Lorem ipsum</h3>
							<p className="aside-link-subtitle">feugiat tempus veroeros dolor</p>
						</div>
					</div>
					<div className="aside-navigation-container py-6">
						<div className="aside-link">
							<h3 className="aside-link-title">Lorem ipsum</h3>
							<p className="aside-link-subtitle">feugiat tempus veroeros dolor</p>
						</div>
					</div>
					<div className="aside-navigation-container pt-6 pb-0 border-0">	
						<div className="aside-link">
							<h3 className="aside-link-title">Lorem ipsum</h3>
							<p className="aside-link-subtitle">feugiat tempus veroeros dolor</p>
						</div>
					</div>
				</nav>

				<div className="aside-button-container">
					<button onClick={ handleSetDarkMode } className="aside-button">log in</button>
				</div>

			</aside>
		</>
	);
}

Aside.propTypes = {

};

export default Aside;
