import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // app.js (생략)
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // 이 코드를 기반으로 public의 index.html의 body 내부 div를 타고감
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// app은 사용자 정의 태그 (상단에 import)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
