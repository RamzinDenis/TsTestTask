import React from "react";
import { StyledListContainer } from "./StyledListContainer";
import ListItem from "./list-item";
import { ListData } from "../../fixtures";
import { withRouter, RouteComponentProps } from "react-router-dom";
import ListContainer from "./ListContainer";

export interface Props extends RouteComponentProps {
	lists: ListData[];
	containerRef?: React.MutableRefObject<any>;
	currentItem?: number;
	setCurrentItem?: React.Dispatch<React.SetStateAction<number>>;
}

const List: React.FC<Props> = ({
	history,
	match,
	containerRef,
	currentItem,
	setCurrentItem,
	lists,
}) => {
	return (
		<StyledListContainer tabIndex={0} ref={containerRef}>
			{lists!.map(list => (
				<ListItem
					list={list}
					key={list.id}
					name={list.id === currentItem ? "active" : ""}
					setCurrentItem={
						setCurrentItem as React.Dispatch<React.SetStateAction<number>>
					}
					history={history}
					match={match}
				/>
			))}
		</StyledListContainer>
	);
};

export default withRouter(ListContainer(List as React.FC<Props>));
