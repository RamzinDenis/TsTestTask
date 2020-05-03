import React from "react";
import { ReactComponent as Logo } from "../../Assets/Logo/logo.svg";
import UserInfo from "../user-info/UserInfo";
import { StyledHeader } from "./StyledHeader";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
	return (
		<StyledHeader>
			<Link to="/">
				<Logo className="logo" />
			</Link>
			<UserInfo />
		</StyledHeader>
	);
};

export default Header;
