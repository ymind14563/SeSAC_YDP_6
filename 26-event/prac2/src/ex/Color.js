import React, { useState } from 'react'

const colorList= [
    { value: "red", text: "빨강" },
    { value: "green", text: "초록" },
    { value: "blue", text: "파랑" },
    { value: "yellow", text: "노랑" },
    { value: "orange", text: "주황" },
    { value: "purple", text: "보라" },
  ];

  const bgColorList = [
    { value: "black", text: "검정" },
    { value: "white", text: "흰색" },
    { value: "grey", text: "회색" },
    { value: "brown", text: "갈색" },
    { value: "pink", text: "분홍" },
    { value: "cyan", text: "청록" },
];

export const Color = ({ setSelectedColor, setSelectedBgColor }) => {

  const selectColor = (e) => {
    let color = [];
    for (let i = 0; i < e.length; i++) {
        color.push(
            <option value={e[i].value}>{e[i].text}</option>
        );
    }
    return color;
  };

  const chgColor = (e, setSomething) => {
    setSomething(e.target.value);
  }

  return (
    <form>
            <label>
                글색상: 
                <select onChange={(e) => chgColor(e, setSelectedColor)}>
                    {selectColor(colorList)}
                </select>
            </label>

            <label>
                배경색: 
                <select onChange={(e) => chgColor(e, setSelectedBgColor)}>
                    {selectColor(bgColorList)}
                </select>
            </label>
        </form>
  )
}
