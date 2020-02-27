import React from 'react';
import cls from './Paginator.module.css';

const Paginator = ({currentPage, pageSize, totalItemsCount, increasePage,decreasePage}) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const disabledLeftBoundry = !(currentPage > 1);
    const disabledRigthBoundry = !(currentPage < pagesCount);

    return (
        <div className={cls.Paginator}>
            <button disabled={disabledLeftBoundry} onClick={decreasePage}>{'<'}</button>
            <button disabled={disabledRigthBoundry} onClick={increasePage}>{'>'}</button>
            <span>{`${currentPage}/${pagesCount}`}</span>
        </div>
    );
};

export default Paginator;