import React from "react";
import { StyledNavBar } from "./StyledNavBar";
import { NavLink, withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import { Button, Typography } from "antd";

interface Props extends RouteComponentProps<object> {
	navigation: { title: string; id: number }[];
}

const NavBar: React.FC<Props> = ({ navigation, match }) => {
	const { Title } = Typography;
	return (
		<StyledNavBar>
			<Title level={3} style={{ textAlign: "center" }}>
				Меню
			</Title>
			{navigation.map(({ id, title }) => (
				<NavLink
					key={id}
					to={`${match.url}${title}`}
					activeClassName={"active"}
				>
					<Button block size="large" className={"btn"}>
						<span className={"link"}>{title}</span>
					</Button>
				</NavLink>
			))}
		</StyledNavBar>
	);
};

export default withRouter(NavBar);
