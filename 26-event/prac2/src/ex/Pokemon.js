import React, { useState } from 'react'

const imageList = [
    { value: "pikachu", pokemon: "피카츄" },
    { value: "raichu", pokemon: "라이츄" },
    { value: "pairi", pokemon: "파이리" },
    { value: "kkobugi", pokemon: "꼬부기" },
];

export const Pokemon = ({ setSelectedPokemon }) => {

  const selectImage = (e) => {
    let img = [];
    for (let i = 0; i < e.length; i++) {
        img.push(
            <option value={e[i].value}>{e[i].pokemon}</option>
        );
    }
    return img;
  };

  const chgImg = (e) => {
    setSelectedPokemon(e.target.value);
  }

  return (
    <form>
        <label>
            포켓몬:
            <select onChange={chgImg}>
                {selectImage(imageList)}
            </select>
        </label>
    </form>
  )
}