import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItem } from '../../store/table/actions';
import cls from './PersonDetails.module.css';


const PersonDetails = ({ id, item, getItem }) => {

    useEffect(() => {
        getItem(id);
    }, [id, getItem])

    if (!item) return (
        <div className={cls.PersonDetails}>
            <h1 style={{textAlign: 'center'}}>Please pick</h1>
        </div>);

    return (
        <div className={cls.PersonDetails}>
            <div>Выбран пользователь: {`${item.firstName} ${item.lastName}`}</div>
            <div>Адрес проживания: {item.address.streetAddress}</div>
            <div>Город: {item.address.city}</div>
            <div>Провинция/штат: {item.address.state}</div>
            <div>Индекс: {item.address.zip}</div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    item: state.table.selectedItem,
    id: ownProps.id
});

const mapDispatchToProps = {
    getItem
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonDetails);