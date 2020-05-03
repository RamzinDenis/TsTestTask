import React, { useEffect, useState, createRef } from "react";
import { StyledTables } from "./StyledTables";
import { Table } from "antd";
import { columns, TableData } from "../../../fixtures";
import { connect } from "react-redux";
import { loadUsers } from "../../../redux/actions";
import SearchBar from "../../search-bar";
import { StoreType } from "../../../redux/types";
import { getSelectedUsersShortData } from "../../../redux/selectors";
import { RouteComponentProps } from "react-router-dom";
import ModalWindow from "../../user-modal";

interface TablesProps extends RouteComponentProps {
	loadUsers: () => Promise<any>;
	data: TableData[];
}

// Тут спрятать логику

const Tables: React.FC<TablesProps> = ({ loadUsers, data, history }) => {
	const searchBarRef = createRef() as any;
	const [selectedRow, SetselectedRow] = useState("");
	const [visible, setVisible] = useState(false);
	const handleKeyAction = (event: KeyboardEvent) => {
		if (event.key === "F9" && selectedRow) {
			history.push(`Пользователи/${selectedRow}`);
		} else if (event.key === "F4" && selectedRow) {
			setVisible(true);
		}
	};
	useEffect((): void => {
		loadUsers();
		searchBarRef.current?.focus();
	}, [searchBarRef]);
	return (
		<StyledTables onKeyDown={(event: any): void => handleKeyAction(event)}>
			<SearchBar inputRef={searchBarRef} />
			<Table
				columns={columns}
				dataSource={data}
				pagination={false}
				className={"tables"}
				expandIconColumnIndex={-1}
				rowKey="name"
				onRow={(record: any) => ({
					onDoubleClick: () => {
						history.push(`Пользователи/${record.id}`);
					},
					onMouseOver: () => {
						SetselectedRow(record.id);
					},
					// onMouseOut: () => SetselectedRow(""),
				})}
			/>

			<ModalWindow id={selectedRow} visible={visible} setVisible={setVisible} />
		</StyledTables>
	);
};

export default connect(
	(state: StoreType) => ({
		data: getSelectedUsersShortData(state),
	}),
	{
		loadUsers,
	}
)(Tables as React.FC);
