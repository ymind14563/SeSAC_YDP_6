import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <App />
);
// LifeCycleClassChild.js 에서 콘솔에 두 번씩 찍히는 원인
// 두 번씩 찍히는 것을 방지하기 위해 </React.StrictMode> 삭제
