import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import configureStore from './store/configureStore';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import moment from 'moment';


const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 0, createdAt: moment().unix()*1000 }));
store.dispatch(addExpense({ description: 'gas bill', amount: 6, createdAt: moment().unix()*1000 }));
store.dispatch(addExpense({ description: 'rent', amount: 222, createdAt: moment().unix()*1000 }));


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
