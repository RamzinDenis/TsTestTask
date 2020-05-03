import { ListData, FolderData } from "../../fixtures";

export interface UserActionType<T> {
	type: string;
	payload: T;
}
// Исправить

export interface UserState {
	entities: { [key: string]: any }[] | any;
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

// и тут тоже пофиксить !!

export interface PayloadType<T, R> {
	response?: T;
	error?: string;
	search?: R;
	user?: { [key: string]: any };
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
