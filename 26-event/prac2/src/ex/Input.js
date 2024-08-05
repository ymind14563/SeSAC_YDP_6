import React from 'react';

export const Input = ({ setInputText }) => {
    const inputChange = (e) => {
        setInputText(e.target.value);
    };

    return (
        <form>
            <label>
                입력:
                <input type="text" onChange={inputChange} />
            </label>
        </form>
    );
};


