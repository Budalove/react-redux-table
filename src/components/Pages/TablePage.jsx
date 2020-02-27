import React from 'react';
import TableContainer from '../Table/TableContainer';
import PaginatorContainer from '../Paginator/PaginatorContainer';
import FormAddDataRow from '../FormAddDataRow/FormAddDataRow';


const TablePage = () => {

    return (
        <React.Fragment>
            {/* <FormAddDataRow /> */}
            <TableContainer />
            <PaginatorContainer />
        </React.Fragment>
    );
}


export default TablePage;