const list = (state = [], action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const item = {
                name: action.name,
                link: action.link,
                img: action.img
            };
            return [...state, item];
        case "REORDER_LIST":
            const result = Array.from(state);
            const [removed] = result.splice(action.src, 1);
            result.splice(action.dest, 0, removed);

            return result;
        case "REMOVE_ITEM":
            return state.filter((val, index) => index !== action.index);
        default:
            return state;
    }
};

export default list;
