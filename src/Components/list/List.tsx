import React, { useState, useEffect, useRef } from "react";
import { StyledListContainer } from "./StyledListContainer";
import ListItem from "./list-item";
import { listData, ListData } from "../../fixtures";
import { withRouter, RouteComponentProps } from "react-router-dom";

// и тут тоже отрефакторить контейнер

interface Props extends RouteComponentProps {
	lists: ListData[];
}

const List: React.FC<Props> = ({ history, match }) => {
	const [currentItem, setCurrentItem] = useState(0);
	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === "ArrowDown") {
			if (currentItem > listData.length) return setCurrentItem(1);
			setCurrentItem(currentItem + 1);
		} else if (event.key === "ArrowUp") {
			if (currentItem < 0) return setCurrentItem(listData.length);
			setCurrentItem(currentItem - 1);
		} else if (event.key === "Enter" && currentItem) {
			history.push(`${match.path}/${currentItem}`);
		}
	};
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	});
	return (
		<StyledListContainer>
			{listData.map(list => (
				<ListItem
					list={list}
					key={list.id}
					name={list.id === currentItem ? "active" : ""}
					setCurrentItem={setCurrentItem}
					history={history}
					match={match}
				/>
			))}
		</StyledListContainer>
	);
};

export default withRouter(List);
