import './App.css';
import Form_prac from './components/react-hook-form/Form_prac';
import Form from './components/react-hook-form/Form';
import Faq from './components/Faq';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemoEx from './components/UseMemoEx';
import UseReducerEx from './components/UseReducerEx';
import useTitle from './hooks/useTitle';

function App() {
  useTitle("React Hooks 학습 중");
  return (
    <div className="App">
      <UseMemoEx />
      <hr />

      <UseCallbackEx />
      <hr />

      <UseCallbackEx2 postId={10}/>
      <hr />

      <UseReducerEx />
      <hr />

      <Faq />
      <hr />

      <Form/>
      <hr />

      <Form_prac />
      <hr />
    </div>
  );
}

export default App;
