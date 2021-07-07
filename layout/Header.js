import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';

import { setShowAside } from 'ducks/actions/ui';

const Header = () => {

	const dispatch = useDispatch();

	const setHiddenAside = () => {
		dispatch(setShowAside(true));
	}

	const handleSetDarkMode = () => {
		const html = document.querySelector('html');
		html.classList.toggle('dark');
	}

	return (
		<header className="header dark:bg-black dark:border-borderD">
			<div className="flex justify-start">
				<h2 className="header-logo dark:text-white dark:border-borderD">Future Imperfect</h2>
				<nav>
					<ul className="header-nav">
						<li className="header-nav-item dark:border-borderD">
							<a className="header-link dark:text-gray" href="#">lorem</a>
						</li>
						<li className="header-nav-item dark:border-borderD">
							<a className="header-link dark:text-gray" href="#">ipsum</a>
						</li>
						<li className="header-nav-item dark:border-borderD">
							<a className="header-link dark:text-gray" href="#">feugiat</a>
						</li>
						<li className="header-nav-item dark:border-borderD">
							<a className="header-link dark:text-gray" href="#">tempus</a>
						</li>
						<li className="header-nav-item dark:border-borderD">
							<a className="header-link dark:text-gray" href="#">adipiscing</a>
						</li>
					</ul>
				</nav>
			</div>

			<div className="flex">
				<button onClick={ handleSetDarkMode } className="header-icon hidden md:block dark:border-borderD dark:text-gray">
					<BiSearchAlt style={{fontSize: '1.5rem'}} />
				</button>
				<button
					className="header-icon dark:border-borderD dark:text-gray"
					onClick={ setHiddenAside }
				>
					<AiOutlineMenu style={{fontSize: '1.5rem'}} />
				</button>
			</div>
		</header>
	);
}

export default Header;
