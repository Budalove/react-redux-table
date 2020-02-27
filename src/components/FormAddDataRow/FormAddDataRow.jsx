import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addDataRow } from '../../store/table/actions';

const AddDataRow = ({ addDataRow }) => {

    const [firstInput, setFirstInput] = useState('');
    const [secondInput, setSecondInput] = useState('');
    const [thirdInput, setThirdInput] = useState('');
    const [fourthInput, setFourthInput] = useState('');

    const newItem = {
        id: Date.now(),
        firstName: firstInput,
        lastName: secondInput,
        email: thirdInput,
        phone: fourthInput
    };

    const onChangeHandle = () => {
        console.log('d')
        addDataRow(newItem);
    }

    return (
        <div>
            <input
                type="text"
                value={firstInput}
                onChange={(e) => setFirstInput(e.target.value)}
            />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button onClick={onChangeHandle}>ADD</button>
        </div>
    );
}

const mapStateToProps = (state) => {

};

const mapDispatchToProps = {
    addDataRow
};

export default connect(null, mapDispatchToProps)(AddDataRow);