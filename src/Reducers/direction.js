const direction = (state = "HORIZONTAL", action) => {
    switch (action.type) {
        case "LIST_DIRECTION":
            return action.direction;
        default:
            return state;
    }
};

export default direction;
