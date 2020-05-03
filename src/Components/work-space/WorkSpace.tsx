import React from "react";
import { StyledWorkSpace } from "./StyledWorkSpace";
import { Switch, Route } from "react-router-dom";
import Tables from "../pages/tables";
import Lists from "../pages/lists";
import Files from "../pages/files";
import UserProfile from "../user-profile";
import ListDetail from "../list/list-detail";
import HomePage from "../pages/home-page";
const WorkSpace: React.FC = () => {
	return (
		<StyledWorkSpace>
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/Таблицы" component={Tables} />
				<Route path="/Пользователи/:userId" component={UserProfile} />
				<Route path="/Список/:listId" component={ListDetail} />
				<Route path="/Список" exact component={Lists} />
				<Route path="/Файлы" component={Files} />
			</Switch>
		</StyledWorkSpace>
	);
};

export default WorkSpace;
