import { connect } from 'react-redux';
import { increasePage, decreasePage } from '../../store/paginator/actions';
import Paginator from './Paginator';


const mapStateToProps = (state) => ({
    currentPage: state.paginator.currentPage,
    pageSize: state.paginator.pageSize,
    totalItemsCount: state.table.data.length,
});

const mapDispatchToProps = {
    increasePage,
    decreasePage
};

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);