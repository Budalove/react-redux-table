import React from 'react';
import cls from './Paginator.module.css';

const Paginator = ({ currentPage, pageSize, totalItemsCount, loading, error, increasePage, decreasePage }) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    const disabledLeftBoundry = !(currentPage > 1);
    const disabledRigthBoundry = !(currentPage < pagesCount);

    if(loading || error) return null;

    return (
        <div className={cls.Paginator}>
            <button className={cls.firstButton} disabled={disabledLeftBoundry} onClick={decreasePage}>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
            <button disabled={disabledRigthBoundry} onClick={increasePage}>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
            <span>{`${currentPage}/${pagesCount}`}</span>
        </div>
    );
};

export default Paginator;