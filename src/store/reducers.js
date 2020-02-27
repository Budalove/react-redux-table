import filterReducer from './filter/reducers';
import tableReducer from './table/reducers';
import paginatorReducer from './paginator/reducers';
import { combineReducers } from 'redux';

export default combineReducers({
    filter: filterReducer,
    table: tableReducer,
    paginator: paginatorReducer
});