import React from "react";
import { StyledWorkSpace } from "./StyledWorkSpace";
import { Switch, Route } from "react-router-dom";
import Tables from "../Tables";
import Lists from "../Lists";
import Files from "../Files";

const WorkSpace: React.FC = () => {
	return (
		<StyledWorkSpace>
			<Switch>
				<Route path="/" exact render={() => <div>Рабочая область</div>} />
				<Route path="/Таблицы" component={Tables} />
				<Route path="/Список" component={Lists} />
				<Route path="/Файлы" component={Files} />
			</Switch>
		</StyledWorkSpace>
	);
};

export default WorkSpace;
