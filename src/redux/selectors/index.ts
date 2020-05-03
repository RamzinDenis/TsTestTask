import { StoreType, UserState, FilesState } from "../types";
import { createSelector } from "reselect";
import { TableData, ListData } from "../../fixtures";

export const getUsers = (state: StoreType) => state.users.entities;
export const getSelectedUsers = (state: StoreType) => state.users.selectedUsers;
export const getProps = (_: any, ownProps: any) => ownProps;
export const getLists = (state: StoreType) => state.lists.entities;
const getFiles = (state: StoreType) => state.files;
// исправить any потом

export const getSelectedUsersList = createSelector(
	[getSelectedUsers, getUsers],
	(SelectedUsers, users) =>
		SelectedUsers.map((item: string) =>
			users.find((user: { [key: string]: any }) => user.id === item)
		)
);

export const getSelectedUsersShortData = createSelector(
	getSelectedUsersList,
	selectedUsers =>
		selectedUsers.map(
			({
				id,
				name,
				phone,
				company,
				age,
				married,
				haveChildren,
				city,
			}: any) => ({
				id,
				city,
				name,
				phone,
				age,
				company: company.name,
				married,
				haveChildren,
			})
		)
);

// Исправить + нейминг

export const getUserById = createSelector(
	getUsers,
	getProps,
	(users: { [key: string]: any }[], props: any) =>
		users.find(user => user.id == props.match.params.userId)
);

export const getSelectedUserById = createSelector(
	getUsers,
	getProps,
	(users: { [key: string]: any }[], props: any) =>
		users.find(user => user.id == props.id)
);

export const getListsByHistoryId = createSelector(
	getLists,
	getProps,
	(lists: ListData[], props: any): ListData | undefined =>
		lists.find(list => list.id === +props.match.params.listId)
);

export const getSelectedFileOrError = createSelector(
	getFiles,
	(files: FilesState) => files.isError || files.selectedFile
);
