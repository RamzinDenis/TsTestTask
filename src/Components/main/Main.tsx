import React from "react";
import WorkSpace from "../work-space";
import NavBar from "../nav-bar";
import { navigation } from "../../fixtures";
import { StyledMain } from "./StyledMain";

const Main: React.FC = () => {
	return (
		<StyledMain>
			<NavBar navigation={navigation} />

			<WorkSpace />
		</StyledMain>
	);
};

export default Main;
