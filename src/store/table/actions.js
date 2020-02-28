import { serviceApi } from '../../services';

const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
const ADD_DATA_ROW = 'ADD_DATA_ROW';
const GET_ITEM_BY_ID = 'GET_ITEM_BY_ID';
const SELECT_SIZE_OF_DATA = 'SELECT_SIZE_OF_DATA';

const dataLoaded = (newData) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: newData
    };
};

const dataError = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}

const addDataRow = (dataRow) => {
    return {
        type: ADD_DATA_ROW,
        payload: dataRow
    };
};

const getItem = (id) => {
    return {
        type: GET_ITEM_BY_ID,
        payload: id
    };
};

const selectData = (url) => {
    return {
        type: SELECT_SIZE_OF_DATA,
        payload: url
    };
}

const fetchData = (url) => (dispatch) => {
    serviceApi.getFetchData(url)
        .then(res => {
            dispatch(dataLoaded(res));
            dispatch(selectData(url));
        })
        .catch(er => {
            dispatch(dataError(er));
        });
}

export {
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    ADD_DATA_ROW,
    GET_ITEM_BY_ID,
    SELECT_SIZE_OF_DATA,
    addDataRow,
    getItem,
    selectData,
    fetchData
};