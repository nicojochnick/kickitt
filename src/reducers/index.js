import { combineReducers } from 'redux'
import activities from './activityReducer'

const appReducer = combineReducers({activities:activities});

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        state = undefined
    }

    return appReducer(state, action)
};

export default appReducer;
