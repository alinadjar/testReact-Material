import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


import App from './App';
//import About2 from './About2';
import { RequestError } from './webservice/RequestError';
import About from './pages/About';



import dataStore from './storeReduxi';
import { Provider } from 'react-redux';




import { MAIN } from './mainLayout';

import * as serviceWorker from './serviceWorker';
import Portal from './pages/portal';
import ModalTable from './pages/modalTable';
import TrEdit from './pages/TrEdit';
import Tjs from './Tjs';
import TC from './TC';


ReactDOM.render(


    <Provider store={dataStore}>
        <MAIN>
            <Router>
                <Switch>
                    <Route path="/" exact={true} component={App} />
                    <Route path="/about" component={About} />
                    <Route path="/portal" component={Portal} />
                    <Route path="/modtable" component={ModalTable} />
                    <Route path="/tredit" component={TrEdit} />
                    <Route path="/error" component={RequestError} />
                    <Route path="/tjs" component={Tjs} />
                    <Route path="/testConnect" component={TC} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </MAIN>
    </Provider>


    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
