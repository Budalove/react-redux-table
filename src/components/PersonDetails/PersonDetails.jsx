import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItem } from '../../store/table/actions';


const PersonDetails = ({id, item, getItem}) => {

    useEffect(() => {
        getItem(id);
    }, [id, getItem])

    if(!item) return <h1>Please pick</h1>

    return (
        <div>
            <span>Выбран пользователь: <b>{`${item.firstName} ${item.lastName}`}</b></span>
            <div>
                <h5>Описание:</h5>
                <p>{item.desciption}</p>
                <h6>Адрес проживания: {item.address.streetAddress}</h6>
                <h6>Город: {item.address.city}</h6>
                <h6>Провинция/штат: {item.address.state}</h6>
                <h6>Индекс: {item.address.zip}</h6>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    item: state.table.selectedItem
});

const mapDispatchToProps = {
    getItem
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonDetails);