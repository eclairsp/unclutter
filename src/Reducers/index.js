import {combineReducers} from "redux";
import list from "./list";
import search from "./search";
import listType from "./listType";

export default combineReducers({
    list,
    search,
    listType
});
