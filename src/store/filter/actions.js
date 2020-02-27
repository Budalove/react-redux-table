const SET_FILTER = 'SET_FILTER';

const filters = {
    NONE: 'NONE',
    SORT_BY_ID: 'SORT_BY_ID',
    SORT_BY_FIRSTNAME: 'SORT_BY_FIRSTNAME',
    SORT_BY_LASTNAME: 'SORT_BY_LASTNAME',
    SORT_BY_EMAIL: 'SORT_BY_EMAIL',
    SORT_BY_PHONE: 'SORT_BY_PHONE',
    REVERSE: 'REVERSE' 
};

const setFilter = filter => {
    return {
        type: SET_FILTER,
        filter
    };
};


export {
    SET_FILTER,
    setFilter,
    filters
};