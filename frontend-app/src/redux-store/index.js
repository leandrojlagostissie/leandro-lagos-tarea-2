import { createStore, applyMiddleware } from 'redux';
import { getAllUsers, addUser, updateUser } from '../services/user.services'
import { toast } from 'react-toastify';

export const FIRSTLOAD = 'FIRSTLOAD';
export const ADD = 'ADD';
export const UPDATE = 'UPDATE';


const usersMiddleware = (store) => (next) => async (action) => {

    try {
        switch (action.type) {
            case ADD:
                action.payLoad = await addUser(action.payLoad)
                break;
            case UPDATE:
                action.payLoad = await updateUser(action.payLoad)
                break;
            case FIRSTLOAD:
                break;
        }
    
        debugger
        next(action);
        
    } catch (error) {
        debugger
        toast.error(error.toString());
    }
}

const usersReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                action.payLoad,
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
        payLoad: res
    });
}).catch(err => {
    store.dispatch({
        type: FIRSTLOAD,
        payLoad: []
    });
})

export default store





