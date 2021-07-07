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

	return (
		<>
			<div
				className={`background-aside dark:bg-backgroundAsideD animate__animated animate__faster ${showAside ? 'animate__fadeIn block' : 'animate__fadeOut hidden'}`}
				onClick={handleHiddenAside}
			></div>
			<aside className={`aside dark:bg-black dark:border-borderD animate__animated animate__faster ${ showAside ? 'animate__fadeInRight' : 'animate__fadeOutRight'}`}>
				<form className="aside-header dark:border-borderD">
					<div className="aside-header-container">
						<label className="aside-search" htmlFor="search">
							<BiSearchAlt2 />
						</label>
						<input className="aside-input" placeholder="Search" type="text" name="" id="search" />
					</div>
				</form>
				<nav className="aside-navigation dark:border-borderD">
					<div className="aside-navigation-container dark:border-borderD">
						<div className="aside-link">
							<h3 className="aside-link-title dark:text-white">Lorem ipsum</h3>
							<p className="aside-link-subtitle dark:text-gray">feugiat tempus veroeros dolor</p>
						</div>
					</div>
					<div className="aside-navigation-container dark:border-borderD py-6">
						<div className="aside-link">
							<h3 className="aside-link-title dark:text-white">Lorem ipsum</h3>
							<p className="aside-link-subtitle dark:text-gray">feugiat tempus veroeros dolor</p>
						</div>
					</div>
					<div className="aside-navigation-container dark:border-borderD py-6">
						<div className="aside-link">
							<h3 className="aside-link-title dark:text-white">Lorem ipsum</h3>
							<p className="aside-link-subtitle dark:text-gray">feugiat tempus veroeros dolor</p>
						</div>
					</div>
					<div className="aside-navigation-container dark:border-borderD pt-6 pb-0 border-0">	
						<div className="aside-link">
							<h3 className="aside-link-title dark:text-white">Lorem ipsum</h3>
							<p className="aside-link-subtitle dark:text-gray">feugiat tempus veroeros dolor</p>
						</div>
					</div>
				</nav>
				<div className="aside-button-container">
					<button className="aside-button dark:text-white">log in</button>
				</div>
			</aside>
		</>
	);
}

Aside.propTypes = {

};

export default Aside;
