import React from "react";
import { StyledNavBar } from "./StyledNavBar";
import { Link } from "react-router-dom";

type Props = {
	navigation: { title: string; id: number }[];
};

const NavBar: React.FC<Props> = ({ navigation }) => {
	return (
		<StyledNavBar>
			<h3>Menu</h3>
			{navigation.map(({ id, title }) => (
				<Link to={title}>
					<p key={id}>{title} </p>
				</Link>
			))}
		</StyledNavBar>
	);
};

export default NavBar;
