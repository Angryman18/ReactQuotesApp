const uiReducerState = {
    toggle: false,
    tempId: null,
}

const uiReducer = (state = uiReducerState, actions) => {
    switch (actions.type) {
        case "toggle":
            return {uniqueId: false ? true : false}
        case "tempID":
            return {...state, tempId: actions.id}
        default:
            return state;
    }
};

export default uiReducer;