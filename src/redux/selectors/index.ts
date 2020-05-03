import { StoreType, FilesState } from "../types";
import { createSelector } from "reselect";
import { ListData, UserData } from "../../fixtures";

export const getUsers = (state: StoreType) =>
	state.users.entities as UserData[];
export const getSelectedUsers = (state: StoreType) => state.users.selectedUsers;
export const getProps = (_: any, ownProps: any) => ownProps;
export const getLists = (state: StoreType) => state.lists.entities;
const getFiles = (state: StoreType) => state.files;

export const getSelectedUsersList = createSelector(
	[getSelectedUsers, getUsers],
	(SelectedUsers, users) =>
		SelectedUsers.map((item: string) => users.find(user => user.id === item))
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

export const getUserById = createSelector(
	getUsers,
	getProps,
	(users, props: any) =>
		users.find(user => +user.id === +props.match.params.userId)
);

export const getSelectedUserById = createSelector(
	getUsers,
	getProps,
	(users, props: any) => users.find(user => user.id === props.id)
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
