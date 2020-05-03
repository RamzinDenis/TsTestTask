import { combineReducers } from "redux";
import { userReducer } from "./users";
import { listsReducer } from "./lists";
import { filesReducer } from "./files";

export default combineReducers({
	users: userReducer,
	lists: listsReducer,
	files: filesReducer,
});
