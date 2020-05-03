import React, { MouseEvent } from "react";
import { StyledListItem, ListBody, ListTitle } from "./StyledListItem";
import { RouteProps } from "react-router-dom";

interface Props {
	list: {
		title: string;
		text: string;
		id: number;
	};
	name: string;
	setCurrentItem: React.SetStateAction<Function>;
	history: any | RouteProps;
	match: RouteProps;
}
// Возможно контейнер
const ListItem: React.FC<Props> = ({
	list,
	name,
	setCurrentItem,
	history,
	match,
}) => {
	const { title, text, id } = list;
	const handleMouseOver = (event: MouseEvent) => {
		setCurrentItem((prev: number) => id);
	};
	const handleMouseOut = (event: MouseEvent) => {
		setCurrentItem((prev: number) => {
			if (!prev) return;
			return 0;
		});
	};
	const handleDblClick = (event: MouseEvent) => {
		event.preventDefault();
		history.push(`${match.path}/${id}`);
	};

	return (
		<StyledListItem
			className={name}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			onDoubleClick={handleDblClick}
		>
			<ListTitle>{title}</ListTitle>
			<ListBody>{text}</ListBody>
		</StyledListItem>
	);
};

export default ListItem;
