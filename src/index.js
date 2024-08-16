import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
let render = (props) => {
    root.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>
    );
}

render(store.getState())
store.subscribe(render)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
