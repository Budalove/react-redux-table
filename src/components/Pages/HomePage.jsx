import React from 'react';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectData } from '../../store/table/actions';

const HomePage = ({ selectData }) => {

    const urlBaseSmallData = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D/';
    const urlBaseBigData = 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Choose the size of data</h1>
            <NavLink to="/table/">
                <Button
                    onClick={() => selectData(urlBaseSmallData)}
                >
                    Small Data</Button>
            </NavLink>
            <NavLink to="/table/">
                <Button
                    onClick={() => selectData(urlBaseBigData)}
                >
                    Big Data
                </Button>
            </NavLink>

        </div>
    );
}

const mapDispatchToProps = {
    selectData
};

export default connect(null, mapDispatchToProps)(HomePage);