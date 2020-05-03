import React from "react";
import { StyledHomePage } from "./StyledHomePage";
import { Empty } from "antd";

const HomePage = () => {
	return (
		<StyledHomePage>
			<h2>Главная страница</h2>
			<h3>Выберите пункт меню для навигации на соответствующую страницу</h3>
			<Empty
				description={false}
				imageStyle={{ height: "200px", width: "200px" }}
			/>
		</StyledHomePage>
	);
};

export default HomePage;
