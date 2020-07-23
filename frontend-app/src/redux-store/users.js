import { createStore, applyMiddleware } from 'redux';
import { getAllUsers } from '../services/user.services'


export const FIRSTLOAD = 'FIRSTLOAD';
export const ADD = 'ADD';
export const UPDATE = 'UPDATE';


const usersMiddleware = (store) => (next) => (action) => {

    switch (action.type) {
        case ADD:
            
            break;
        case UPDATE:
            
            break;
        case FIRSTLOAD:
            
            break;
    }


    next(action);
}

const usersReducer = (state = [], action) => {
    debugger
    switch (action.type) {
        case ADD:
            return [
                action.payLoad,
                ...state,
            ]
        case UPDATE:
            return state.map(user => {
                if (user.id === action.payLoad.id) {
                    return action.payLoad;
                }
                return user
            })
        case FIRSTLOAD:
            return action.payLoad
        default:
            return state
    }
}


const store = createStore(usersReducer, applyMiddleware(usersMiddleware));

// store.subscribe(() => {
//     console.log(store.state);
// })


getAllUsers().then(res => {
    store.dispatch({
        type: FIRSTLOAD,
        payLoad: [{id:1}]
    });
})

export default store





