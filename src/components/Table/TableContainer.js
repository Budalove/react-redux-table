import { connect } from 'react-redux';
import { dataLoaded, dataError } from '../../store/table/actions';
import { filters } from '../../store/filter/actions';
import Table from './Table';

const getSortData = (data, filter) => {

    switch (filter) {
        case filters.SORT_BY_ID:
            return data.sort((a,b) => a.id - b.id);

        case filters.SORT_BY_FIRSTNAME:
            return data.sort((a, b) => {
                if(a.firstName > b.firstName)
                    return 1;
                if(a.firstName < b.firstName)
                    return -1;
                return 0;
            });
        
        case filters.REVERSE:
            return data.reverse();

        default:
            return data;
    }
}

const getSliceData = (data, currentPage, pageSize = 5) => {

    const indexOfLastItem = currentPage * pageSize;
    const indexOfFirstItem = indexOfLastItem - pageSize;

    return data.slice(indexOfFirstItem, indexOfLastItem);
}

const mapStateToProps = (state) => ({
    data: getSliceData(getSortData(state.table.data, state.filter), state.paginator.currentPage, state.paginator.pageSize),
    loading: state.table.loading,
    sort: state.filter
});

const mapDispatchToProps = {
    dataLoaded,
    dataError
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);