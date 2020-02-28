import React from 'react';
import cls from './ErrorIndicator.module.css';

const ErrorIndicator = () => {

    return (
        <div className={cls.Error}>
            <h2>Something went wrong...</h2>
            <h3>We are already fixing this!</h3>
        </div>
    );
}

export default ErrorIndicator;