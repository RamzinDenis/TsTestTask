import { ListData, FolderData, UserData } from "../../fixtures";

export interface UserActionType<T> {
	type: string;
	payload: T;
}

export interface UserState {
	entities: UserData[];
	selectedUsers: string[];
	isLoading: boolean;
	isLoaded: boolean;
	isError: boolean | null | string;
}

export interface FilesState {
	selectedFile: { [key: string]: any }[];
	isLoading: boolean;
	isLoaded: boolean;
	isError: boolean;
}

export interface FilesAction {
	type: string;
	payload?: string | {}[];
}

export type FilesDispatch = (action: FilesAction) => void;

export interface PayloadType<T, R> {
	response?: T;
	error?: string;
	search?: R;
	user?: UserData;
}

export interface searchDataTypes {
	city: string;
	haveChildren: boolean;
	married: boolean;
	ageTo: number;
	ageFrom: number;
}

export interface ListsState {
	entities: ListData[];
}

export interface ListAction {
	type: string;
	payload: ListData[] | { [key: string]: any }[];
}

export type StoreType = {
	users: UserState;
	lists: ListsState;
	files: FilesState;
};
