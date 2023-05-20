import React from 'react';

function Input({
    className,
    setInputValue,
    setInputValueExtended,
    inputValue,
    ...props
}) {

    return (
        <input
            className={`input ${className}`}
            value={inputValue !== null ? inputValue : ''}
            onChange={setInputValueExtended || ((e) => setInputValue(e.target.value))}
            {...props}
        />
    );
}

export default Input;
