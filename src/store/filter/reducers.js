import { filters, SET_FILTER } from './actions';

const filterReducer = (state = filters.NONE, action) => {

    switch (action.type) {
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}

export default filterReducer;