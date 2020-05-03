import { FilesState, FilesAction } from "../types";
import { REQUEST, LOAD_SELECTED_FILE, SUCCESS, FAILURE } from "../constans";

const initialState: FilesState = {
	selectedFile: [],
	isLoading: false,
	isLoaded: false,
	isError: false,
};

export const filesReducer = (
	state: FilesState = initialState,
	action: FilesAction
) => {
	const { type, payload } = action;
	switch (type) {
		case LOAD_SELECTED_FILE + REQUEST:
			return {
				...state,
				isLoading: true,
				isError: null,
			};
		case LOAD_SELECTED_FILE + SUCCESS:
			return {
				...state,
				isLoading: false,
				isLoaded: true,
				selectedFile: payload,
			};
		case LOAD_SELECTED_FILE + FAILURE:
			return {
				...state,
				isLoading: false,
				isError: payload,
			};
		default:
			return state;
	}
};
