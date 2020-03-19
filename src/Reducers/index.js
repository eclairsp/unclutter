import {combineReducers} from "redux";
import list from "./list";
import search from "./search";
import listType from "./listType";
import direction from "./direction";

const appReducer = combineReducers({
    list,
    search,
    listType,
    direction
});

const rootReducer = (state, action) => {
    switch (action.type) {
        case "IMPORT_DATA":
            return action.data;
        case "CLEAR_DATA":
            return undefined;
        default:
            return appReducer(state, action);
    }
};

export default rootReducer;
