import {
	UserState,
	UserActionType,
	PayloadType,
	searchDataTypes,
} from "../types";
import { filterBy, filterByBooleanValue, filterByAge } from "../utils";
import {
	LOAD_USERS,
	REQUEST,
	SUCCESS,
	FAILURE,
	SEARCH_USERS,
	UPDATE_USER_PROFILE,
} from "../constans";

const initialState: UserState = {
	entities: [],
	selectedUsers: [],
	isLoading: false,
	isLoaded: false,
	isError: false,
};

export const userReducer = (
	state = initialState,
	action: UserActionType<PayloadType<{}[], searchDataTypes>>
): UserState => {
	const { type, payload } = action;
	switch (type) {
		case LOAD_USERS + REQUEST:
			return {
				...state,
				isLoading: true,
				isError: null,
			};
		case LOAD_USERS + SUCCESS:
			return {
				...state,
				isLoading: false,
				isLoaded: true,
				entities: [
					...state.entities,
					...(payload.response as { [key: string]: any }[]),
				],
			};
		case LOAD_USERS + FAILURE:
			return {
				...state,
				isLoaded: true,
				isLoading: false,
				isError: payload.error as string,
			};
		case SEARCH_USERS:
			const { city, haveChildren, married, ageFrom, ageTo } = payload.search!;
			const filteredByCity: {}[] | [] = filterBy(city, "city", state.entities);
			const filteredByChildren: typeof filteredByCity = filterByBooleanValue(
				haveChildren,
				"haveChildren",
				filteredByCity
			);
			const filteredByMarried: {}[] = filterBy(
				married,
				"married",
				filteredByChildren
			);
			const filteredByAge = filterByAge(ageFrom, ageTo, filteredByMarried);
			return {
				...state,
				selectedUsers: filteredByAge!.map(
					(item: { [key: string]: any }) => item.id
				),
			}; // и тут тоже пофиксить
		case UPDATE_USER_PROFILE:
			return {
				...state,
				entities: state.entities.map((item: { [key: string]: any }) =>
					item.id === payload.user!.id ? payload.user : item
				),
			};
		default:
			return state;
	}
};
