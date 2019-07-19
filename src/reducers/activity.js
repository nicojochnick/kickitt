import {ADD_ACTIVITY} from '../actions';


/* setup activity data structure */
const initialState = {

};

const activities = ( state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ACTIVITY':
            return { ...state};
        default:
            return state;
    }
};

export default activities;

