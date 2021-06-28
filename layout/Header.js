import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';

const Header = () => {

	return (
		<header className="header">
			<div className="flex justify-start">
				<h2 className="header-logo">Future Imperfect</h2>
				<nav>
					<ul className="header-nav">
						<li className="header-nav-item">
							<a className="header-link" href="#">lorem</a>
						</li>
						<li className="header-nav-item">
							<a className="header-link" href="#">ipsum</a>
						</li>
						<li className="header-nav-item">
							<a className="header-link" href="#">feugiat</a>
						</li>
						<li className="header-nav-item">
							<a className="header-link" href="#">tempus</a>
						</li>
						<li className="header-nav-item">
							<a className="header-link" href="#">adipiscing</a>
						</li>
					</ul>
				</nav>
			</div>

			<div className="flex">
				<button className="header-icon hidden md:block">
					<BiSearchAlt style={{fontSize: '1.5rem'}} />
				</button>
				<button className="header-icon">
					<AiOutlineMenu style={{fontSize: '1.5rem'}} />
				</button>
			</div>
		</header>
	);
}

export default Header;
