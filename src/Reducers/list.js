const list = (state = [], action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const item = {
                name: action.name,
                link: action.link,
                img: action.img
            };
            return [...state, item];
        case "REMOVE_ITEM":
            return state.filter((val, index) => index !== action.index);
        default:
            return state;
    }
};

export default list;
