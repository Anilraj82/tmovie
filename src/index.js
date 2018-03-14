import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Movie} from "./components/Movie";
import {People} from "./components/People";
import {Contact} from "./components/Contact";
import {Header} from "./components/Header";
import {Futer} from "./components/Footer";



ReactDOM.render(
    (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route path='/movie' component={Movie} />
                    <Route path='/people' component={People} />
                    <Route path='/contact' component={Contact} />
                </Switch>
                <Futer/>
            </div>
        </BrowserRouter>
    ),
    document.getElementById('root')
);