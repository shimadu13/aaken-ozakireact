import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Hello from './components/Hello';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import Header from './components/Header';

function Router() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Route path='/' component={Hello} exact />
                <Route path='/Hello' component={Hello} exact />
                <Route path='/Counter' component={Counter} exact />
                <Route path='/TodoList' component={TodoList} exact />
            </div>
        </BrowserRouter>
    );
}

export default Router;