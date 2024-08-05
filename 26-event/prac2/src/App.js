import './App.css';
import React, { useState } from 'react';
import { Pokemon } from './ex/Pokemon';
import { Color } from './ex/Color';
import { Input } from './ex/Input';
import { Result } from './ex/Result';


function App() {
  const [selectedPokemon, setSelectedPokemon] = useState('pikachu');
  const [selectedColor, setSelectedColor] = useState('white');
  const [selectedBgColor, setSelectedBgColor] = useState('black');
  const [inputText, setInputText] = useState('text');


  return (
    <div className="App">
      <div className="select">
        <Pokemon setSelectedPokemon={setSelectedPokemon} />
        <Color setSelectedColor={setSelectedColor} setSelectedBgColor={setSelectedBgColor} />
      </div>
        <Input setInputText={setInputText} />
        <Result selectedPokemon={selectedPokemon} selectedColor={selectedColor} selectedBgColor={selectedBgColor} inputText={inputText}/>
    </div>
  );
}

export default App;
