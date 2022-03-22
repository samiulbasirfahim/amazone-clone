import React from "react"
import logo from "../../images/Logo.svg"
import "./Header.css"

const Header = () => {
	return (
		<div className="navigation-bar">
			<nav>
				<div className="logo">
					<img src={logo} alt="" />
				</div>
				<div>
					<ul>
						<li>
							<a href="/order">Order</a>
						</li>
						<li>
							<a href="/review">Order review</a>
						</li>
						<li>
							<a href="/manage">Manage Inventory</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Header
