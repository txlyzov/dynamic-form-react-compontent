import React from 'react';

function Textarea({
    className,
    setInputValue,
    setInputValueExtended,
    inputValue,
    ...props
}) {
    return (
        <textarea
            className={`textarea ${className}`}
            value={inputValue !== null ? inputValue : ''}
            onChange={setInputValueExtended || ((e) => setInputValue(e.target.value))}
            {...props}
        />
    );
}

export default Textarea;
