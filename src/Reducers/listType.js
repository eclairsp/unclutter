const listType = (state = false, action) => {
    switch (action.type) {
        case "LIST_TYPE":
            return !state;
        default:
            return state;
    }
};

export default listType;
