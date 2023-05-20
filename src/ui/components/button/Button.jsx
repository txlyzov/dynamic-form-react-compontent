/* eslint-disable react/button-has-type */
import './Button.scss';
import React from 'react';

function Button({
    className = '',
    onClick,
    type = 'button',
    disabled = false,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            disabled={disabled}
            type={type}
            onClick={onClick}
            className={`button 
                  ${className} 
                  ${disabled ? 'disabled' : ''}`}
        >
            {children}
        </button>
    );
}

export default Button;
