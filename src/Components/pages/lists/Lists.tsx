import React, { useEffect } from "react";
import { StyledLists } from "./StyledLists";
import List from "../../list";
import { listData } from "../../../fixtures";
import { loadLists } from "../../../redux/actions";
import { connect } from "react-redux";

interface Props {
	loadLists: Function;
}

const Lists: React.FC<Props> = ({ loadLists }) => {
	useEffect(() => {
		loadLists(listData); // eslint-disable-next-line
	}, []);
	return (
		<StyledLists>
			<h4 className="list__title">Список</h4>
			<List lists={listData} />
		</StyledLists>
	);
};

export default connect(null, { loadLists })(Lists);
