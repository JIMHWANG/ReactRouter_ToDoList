import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import './Style/Reset.scss';
import './Style/Index.scss';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const ToDoListRoot = ReactDOM.createRoot(document.getElementById('ToDoListRoot'));
ToDoListRoot.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
