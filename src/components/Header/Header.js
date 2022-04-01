import React from "react"
import logo from "../../images/Logo.svg"
import CustomLink from "../CustomLInk/CustomLink"
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
							<CustomLink  to={"/home"}>Home</CustomLink>
						</li>
						<li>
							<CustomLink  to={"/review"}>Review</CustomLink>
						</li>
						<li>
							<CustomLink  to={"/manage"}>Manage Inventory</CustomLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Header
