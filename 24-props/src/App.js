import './App.css';
import Button from './Button';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <ClassComponent name="SeSAC 6기" />
      <hr />

      <FunctionComponent name="SeSAC 6기"/>
      <FunctionComponent name="SeSAC 6기" />
      {/* <FunctionComponent name={3} />   출력이 되긴하지만 FunctionComponent에 설정한 string에 맞지 않기 때문에 콘솔에 에러가 뜬다. */}
      <hr />

      <Button style={{backgroundColor: 'red'}} link="https://www.google.com">Google</Button>
      <Button></Button>
    
    </div>
  );
}

export default App;
