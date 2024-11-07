import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Counter from './Counter';

// import MyComp3 from './MyComp';
// import {MyComp as MyImportedComp, MyComp2} from './MyComp';

import MyComp3, {MyComp, MyComp2} from './MyComp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    <Counter init={0} />
    {/* <Counter /> */}
    
    {/* <MyComp 
      text="First" 
      num={6}
      user={{name: 'John', age: 25}} 
      style={{color: 'red'}}
    />
    <MyComp 
      text="Second" 
      num={7}
      user={{name: 'John', age: 25}} 
      style={{color: 'blue'}}
    /> */}
    {/* <MyComp2 />
    <MyComp3 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
