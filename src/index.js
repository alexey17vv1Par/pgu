import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SecondApp from "./second/SecondApp";
import ThirdApp from "./third/ThirdApp";

const labKeys = {
    first: 'first',
    second: 'second',
    third: 'third',
};

const labs = {
    [labKeys.first]: <App />,
    [labKeys.second]: <SecondApp />,
    [labKeys.third]: <ThirdApp />,
};

ReactDOM.render(
  <React.StrictMode>
      {labs[labKeys.third]}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
