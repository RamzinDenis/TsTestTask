import React from "react";
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
import TableContainer from "./TableContainer";

interface TablesProps extends RouteComponentProps {
	loadUsers: () => Promise<any>;
	data: TableData[];
	searchBarRef: React.Ref<any>;
	visible: boolean;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
	handleKeyAction: (event: KeyboardEvent) => void;
	selectedRow: string;
	setSelectedRow: React.Dispatch<React.SetStateAction<string>>;
}

const Tables: React.FC<TablesProps> = ({
	data,
	history,
	setVisible,
	handleKeyAction,
	searchBarRef,
	visible,
	selectedRow,
	setSelectedRow,
}) => {
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
				rowClassName={record => (record.id === selectedRow ? "active" : "")}
				onRow={(record: any) => ({
					onDoubleClick: () => {
						history.push(`Пользователи/${record.id}`);
					},
					onMouseOver: () => {
						setSelectedRow(record.id);
					},
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
)(TableContainer(Tables as React.FC));
