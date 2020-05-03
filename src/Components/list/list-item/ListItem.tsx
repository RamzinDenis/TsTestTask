import React, { MouseEvent } from "react";
import { StyledListItem, ListBody, ListTitle } from "./StyledListItem";
import { RouteProps } from "react-router-dom";
import ListItemContainer from "./ListItemContainer";

export interface Props {
	list: {
		title: string;
		text: string;
		id: number;
	};
	name: string;
	setCurrentItem: React.SetStateAction<Function>;
	history: any | RouteProps;
	match: RouteProps;
	handleMouseOut?: () => void;
	handleMouseOver?: () => void;
	handleDblClick?: () => void;
}
const ListItem: React.FC<Props> = ({
	list,
	name,
	handleMouseOut,
	handleMouseOver,
	handleDblClick,
}) => {
	const { title, text, id } = list;

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

export default ListItemContainer(ListItem as React.FC);
