import {searchFilters} from "../Actions";

const search = (state = searchFilters.GOOGLE, action) => {
    switch (action.type) {
        case "SEARCH_TYPE":
            return action.filter;
        default:
            return state;
    }
};

export default search;
