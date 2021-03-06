import axios from 'axios';

const initialState = {
    user: {}
};

//Action Types
const GET_USER_INFO = 'GET_USER_INFO';

//Action Creator
export function getUserInfo() {
    let userInfo = axios.get('/auth/me').then(response => {
        if (response.data !== 'User not found') {
            return response.data;
        }
    })
    return {
        type: GET_USER_INFO,
        payload: userInfo
    }
}

//Reducer Function
export default function reducer(state= initialState, action) {
    switch(action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });
        default:
            return state;
    }
}