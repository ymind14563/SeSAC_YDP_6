import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import counterReducer from './store/counterReducer';
import { createStore } from 'redux'; // 취소선: 잘 쓰는 방식이니 지양해라라는 뜻 (작동은 됨)
import { Provider } from 'react-redux';
import App2 from './App2';
import App3 from './App3';
import rootReducer from './store';
import App4 from './App4';

const root = ReactDOM.createRoot(document.getElementById('root'));

// #6. Store 생성
// [전통 Redux 방식]
// 'createStore'를 사용하여 Redux 스토어를 생성
const store = createStore(rootReducer,
  // Redux DevTools Extension - 구글 크롬 확장 프로그램 검색
  // Redux DevTools Extension 사용하는 경우 (redux-toolkit 방식 적용하지 않았는데 확장프로그램 이용해야하는 경우를 말함)
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


root.render(
  <React.StrictMode>
    {/* React와 Redux 연결 */}
    {/* 애플리케이션의 모든 컴포넌트가 Redux 스토어에 접근할 수 있게 됨 */}
    <Provider store={store}> {/* Redux Provider로 스토어를 앱에 주입함 */}
      <App />
      <hr />
      <App2 />
      <hr />
      <App3 />
      <hr />
      <App4 />
    </Provider>
  </React.StrictMode>
);

