import {
	StoreType,
	UserState,
	UserActionType,
	searchDataTypes,
	FilesDispatch,
} from "../types";
import {
	LOAD_USERS,
	REQUEST,
	SUCCESS,
	URL,
	FAILURE,
	SEARCH_USERS,
	UPDATE_USER_PROFILE,
	LOAD_LISTS,
	LOAD_SELECTED_FILE,
} from "../constans";

import { ListData, UserData } from "../../fixtures";

type DispatchTypes = (action: UserActionType<object | string>) => void;

export const loadUsers = () => async <T>(
	dispatch: DispatchTypes,
	getState: () => StoreType
): Promise<T | { error: string } | void> => {
	const users: UserState = getState().users;
	const { isLoaded, isLoading } = users;

	if (isLoaded || isLoading) return;
	dispatch({
		type: LOAD_USERS + REQUEST,
		payload: {},
	});

	try {
		const result = await fetch(URL);
		const response: [] = await result.json();

		dispatch({
			type: LOAD_USERS + SUCCESS,
			payload: {
				response,
			},
		});
	} catch (error) {
		dispatch({
			type: LOAD_USERS + FAILURE,
			payload: {
				error: error.toString(),
			},
		});
	}
};

export const searchUsers = (search: searchDataTypes) => (
	dispatch: DispatchTypes
) => {
	dispatch({
		type: SEARCH_USERS,
		payload: {
			search,
		},
	});
};

export const updateUserProfile = (user: UserData) => (
	dispatch: DispatchTypes
) => {
	dispatch({
		type: UPDATE_USER_PROFILE,
		payload: {
			user,
		},
	});
};

export const loadLists = (
	lists: ListData[]
): { type: string; payload: ListData[] } => ({
	type: LOAD_LISTS,
	payload: lists,
});

export const loadSelectedFile = (id: string) => async (
	dispatch: FilesDispatch
) => {
	dispatch({
		type: LOAD_SELECTED_FILE + REQUEST,
	});
	try {
		console.log(`file${id}`);
		const response: {}[] = await (await fetch(`file${id}.json`)).json();
		dispatch({
			type: LOAD_SELECTED_FILE + SUCCESS,
			payload: response,
		});
	} catch (err) {
		dispatch({
			type: LOAD_SELECTED_FILE + FAILURE,
			payload: err.toString(),
		});
	}
};
