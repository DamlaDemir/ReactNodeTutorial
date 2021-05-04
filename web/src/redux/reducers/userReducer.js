
const initialState = {
    users: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USERS":
            return { ...state, users: action.payload }
            break;

        default:
            break;
    }

    return state;
}

export default userReducer;