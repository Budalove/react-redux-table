import { connect } from 'react-redux';
import { fetchData } from '../../store/table/actions';
import { filters } from '../../store/filter/actions';
import Table from './Table';


let prevFilt = null; // Fix it!

const getSortData = (data, filter) => {

    if (prevFilt === filter) return data;

    prevFilt = filter;

    switch (filter) {
        case filters.SORT_BY_ID:
            return data.sort((a, b) => a.id - b.id);

        case filters.SORT_BY_FIRSTNAME:
            return data.sort((a, b) => {
                if (a.firstName > b.firstName)
                    return 1;
                if (a.firstName < b.firstName)
                    return -1;
                return 0;
            });

        case filters.SORT_BY_LASTNAME:
            return data.sort((a, b) => {
                if (a.lastName > b.lastName)
                    return 1;
                if (a.lastName < b.lastName)
                    return -1;
                return 0;
            });

        case filters.SORT_BY_EMAIL:
            return data.sort((a, b) => {
                if (a.email > b.email)
                    return 1;
                if (a.email < b.email)
                    return -1;
                return 0;
            });

        case filters.SORT_BY_PHONE:
            return data.sort((a, b) => a.phone - b.phone);

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

const mapStateToProps = ({ filter, table: { data, loading, error, url }, paginator: { pageSize, currentPage } }) => ({
    data: getSliceData(getSortData(data, filter), currentPage, pageSize),
    loading: loading,
    error: error,
    url: url
});

const mapDispatchToProps = {
    fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);