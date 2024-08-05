import React from 'react';

export const Result = ({ selectedPokemon, selectedColor, selectedBgColor, inputText }) => {
    const imagePath = `/image/${selectedPokemon}.jpg`;

    const imgStyle = {
        padding: '20px',
        textAlign: 'center',
        width: '500px'
    };
    
    const textStyle = {
        color: selectedColor,
        backgroundColor: selectedBgColor,
        height: '80px',
        fontSize: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    return (
        <div>
            <img src={imagePath} alt={selectedPokemon} style={imgStyle} />
            <p style={textStyle}>{inputText}</p>
        </div>
    );
};

