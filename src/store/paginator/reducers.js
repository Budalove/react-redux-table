import { INCREASE_CURRENT_PAGE, DECREASE_CURRENT_PAGE } from './actions';

const initialState = {
    currentPage: 1,
    pageSize: 10
}

const paginatorReducer = (state = initialState, action) => {

    switch (action.type) {

        case INCREASE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1
            };

        case DECREASE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage - 1
            };

        default:
            return state;
    }
};

export default paginatorReducer;