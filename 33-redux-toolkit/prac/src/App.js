import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { plus, minus } from './store/bankSlice';

function App() {
  const currentMoney = useSelector((state) => state.bank.deposit);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const plusMoney = () => {
    dispatch(plus(input));
    setInput('');
  }

  const minusMoney = () => {
    if(currentMoney < input) return alert('잔액부족')
    dispatch(minus(input));
    setInput('');
  }


  return (
    <div className="App">
      <h1>BANK</h1>
      <h2>잔액 : {currentMoney} 원</h2>
      <input type="number" value={input} onChange={(e)=> setInput(Number(e.target.value))}/>
      <button onClick={()=>plusMoney()}>입금</button>
      <button onClick={()=>minusMoney()}>출금</button>
    </div>
  );
}

export default App;
