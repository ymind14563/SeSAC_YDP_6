import './App.css';
import ClassBind from './ClassBind';
import Counter from './Counter';
import EventStudy from './EventStudy';
import SyntheticEvent from './SyntheticEvent';

function App() {
  return (
    <div className="App">
      <EventStudy />
      <hr />

      <SyntheticEvent />
      <hr />

      <ClassBind />
      <hr />

      <Counter />
    </div>
  );
}

export default App;
