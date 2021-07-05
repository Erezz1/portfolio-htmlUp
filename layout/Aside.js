import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { BiSearchAlt2 } from 'react-icons/bi';

import { setShowAside } from 'ducks/actions/ui';

const Aside = () => {

	const dispatch = useDispatch();

	const handleHiddenAside = () => {
		dispatch(setShowAside(false));
	}

	return (
		<>
			<div className="background-aside" onClick={ handleHiddenAside }></div>
			<aside className="aside">
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
					<button className="aside-button">log in</button>
				</div>
			</aside>
		</>
	);
}

Aside.propTypes = {

};

export default Aside;
