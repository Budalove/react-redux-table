import React from 'react';



const Link = ({name, reverse, onClickSort, onClickReverse}) => {

    return (
        <th>
            <button onClick={ reverse ? onClickReverse : onClickSort}>
                sort
            </button>
            <span>{name}</span>
        </th>
    );
}


export default Link;