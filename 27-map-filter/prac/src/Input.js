import React, { useState } from 'react'

export default function Input() {
  const [name, setName] = useState('코디');
  const [email, setEmail] = useState('123@gmail.com');
  const [text, setText] = useState([
    {
        id: 1,
        name: '코디',
        email: '111@gmail.com'
    }
  ]);


  const addText = () => {
    const newText = name.concat ({
        id: name.length + 1,
        name: setName,
        email: setEmail
    })

    setText(newText);
    setName('');
    setEmail('');

  }


  return (
    <div>
        <h1>실습 (1)</h1>
        <input type="text" placeholder='name' onChange={(e) => {setName(e.target.value);}}/>
        <input type="text" placeholder='email' onChange={(e) => {setEmail(e.target.value);}} />
       

        <button onClick={addText}>제출</button>
        <ol>
        {text.map((value, idx) => {
            return <li key={idx}>{value.name}: {value.email}</li>
        })}
        </ol>
    </div>
  )
}
