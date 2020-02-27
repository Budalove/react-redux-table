import { 
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    ADD_DATA_ROW,
    GET_ITEM_BY_ID
} from './actions';

const initialState = {
    data: [],
    loading: true,
    error: null,
    selectedItem: null
}

const tableReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return {
                loading: false,
                error: null,
                data: action.payload,
                selectedItem: null
            };

        case FETCH_DATA_FAILURE:
            return {
                loading: false,
                error: action.payload,
                data: [],
                selectedItem: null
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

        default:
            return state;
    }
}

export default tableReducer;