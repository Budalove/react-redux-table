import { 
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    ADD_DATA_ROW,
    GET_ITEM_BY_ID,
    SELECT_SIZE_OF_DATA
} from './actions';

const initialState = {
    data: [],
    loading: true,
    error: null,
    selectedItem: null,
    url: null
}

const tableReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case ADD_DATA_ROW:
            return {
                ...state,
                data: [
                    action.payload,
                    ...state.data
                ]
            };

        case GET_ITEM_BY_ID:
            const item = state.data.find(i => i.id === parseInt(action.payload))
            return {
                ...state,
                selectedItem: item
            };

        case SELECT_SIZE_OF_DATA:
            return {
                ...state,
                url: action.payload
            };

        default:
            return state;
    }
}

export default tableReducer;