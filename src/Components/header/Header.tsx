import React from "react";
import { ReactComponent as Logo } from "../../Assets/Logo/logo.svg";
import UserInfo from "../user-info/UserInfo";
import { StyledHeader } from "./StyledHeader";

const Header: React.FC = () => {
	return (
		<StyledHeader>
			<Logo className="logo" />
			<UserInfo />
		</StyledHeader>
	);
};

export default Header;
