import { LOAD_LISTS } from "../constans";
import { ListsState, ListAction } from "../types";

const initialState = {
	entities: [],
};

export const listsReducer = (
	state: ListsState = initialState,
	action: ListAction
) => {
	const { payload, type } = action;
	switch (type) {
		case LOAD_LISTS:
			return {
				...state,
				entities: payload,
			};

		default:
			return state;
	}
};
