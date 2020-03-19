const addBtnPosition = (state = "FRONT", action) => {
    switch (action.type) {
        case "ADD_BTN_POSITION":
            return action.position;
        default:
            return state;
    }
};

export default addBtnPosition;
