import React from 'react';
import cls from './Button.module.css';


const Button = (props) => {

    return (
        <button onClick={props.onClick} className={cls.Button} >
            {props.children}
        </button>
    );
}

export default Button