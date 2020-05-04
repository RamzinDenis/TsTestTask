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
	setSelectedRow: React.Dispatch<React.SetStateAction<number>>;
	setId: React.Dispatch<React.SetStateAction<number>>;
	currentId: number;
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
	setId,
	currentId,
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
				rowClassName={(record, index) => {
					if (index === +selectedRow) {
						setId(record.id as any);
						return "active";
					} else return "";
				}}
				onRow={(record: any, index) => ({
					onDoubleClick: () => {
						history.push(`Пользователи/${record.id}`);
					},
					onMouseOver: () => {
						setSelectedRow(index!);
						setId(record.id);
					},
					onMouseOut: () => {
						setSelectedRow(-1);
					},
				})}
			/>

			<ModalWindow
				id={currentId as number}
				visible={visible}
				setVisible={setVisible}
			/>
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
