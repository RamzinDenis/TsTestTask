import React from "react";
import { StyledNavBar } from "./StyledNavBar";

type Props = {
	navigation: { title: string; id: number }[];
};

const NavBar: React.FC<Props> = ({ navigation }) => {
	return (
		<StyledNavBar>
			<h3>Menu</h3>
			{navigation.map(({ id, title }) => (
				<p key={id}>{title}</p>
			))}
		</StyledNavBar>
	);
};

export default NavBar;
