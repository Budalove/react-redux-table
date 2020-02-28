import { connect } from 'react-redux';
import { increasePage, decreasePage } from '../../store/paginator/actions';
import Paginator from './Paginator';


const mapStateToProps = ({paginator: {currentPage, pageSize}, table: {data, loading, error}}) => ({
    currentPage: currentPage,
    pageSize: pageSize,
    totalItemsCount: data.length,
    loading: loading,
    error: error
});

const mapDispatchToProps = {
    increasePage,
    decreasePage
};

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);