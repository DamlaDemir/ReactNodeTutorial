import axios from "axios";

export const getUsers = () => dispatch => {
    axios.get('http://localhost:8000/user/getAll').then(response => {
        if (response.status === 200) {
            dispatch({ type: "SET_USERS", payload: response.data });
        }
    });
}