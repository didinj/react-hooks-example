import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import List from './components/List';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';

ReactDOM.render(
    <Router>
        <div>
            <Route render ={()=> < App />} path="/" />
            <Route render ={()=> < List />} path="/list" />
            <Route render ={()=> < Edit />} path="/edit/:id" />
            <Route render ={()=> < Create />} path="/create" />
            <Route render ={()=> < Show />} path="/show/:id" />
        </div>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
