import { connect } from 'react-redux';
import { setFilter } from '../../store/filter/actions';
import { filters } from '../../store/filter/actions';
import Link from './Link';


const mapStateToProps = (state, ownProps) => ({
    reverse: state.filter === ownProps.filter,
    name: ownProps.name
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClickSort: () => dispatch(setFilter(ownProps.filter)),
    onClickReverse: () => dispatch(setFilter(filters.REVERSE))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Link);