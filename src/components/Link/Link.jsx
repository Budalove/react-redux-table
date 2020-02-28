import React from 'react';
import cls from './Link.module.css';


const Link = ({ name, reverse, onClickSort, onClickReverse }) => {

    const iconSortUp = <i className="fa fa-sort-asc" aria-hidden="true" />;
    const iconSortDown = <i className="fa fa-sort-desc" aria-hidden="true" />;

    const incon = reverse ? iconSortUp : iconSortDown;
    
    return (
        <th>
            <div className={cls.Link}>
                <button onClick={reverse ? onClickReverse : onClickSort}>
                    {incon}
                </button>
                <span>{name}</span>
            </div>
        </th>
    );
}

export default Link;