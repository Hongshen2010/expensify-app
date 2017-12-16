import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import AddExpensePage from './../components/AddExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import ExpenseDashBoardPage from './../components/ExpenseDashBoardPage';
import NotFoundPage from './../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();
// history.listen = () => {
//     console.log('url changed');
// };

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute exact={true} path="/" component={LoginPage} />
                <PrivateRoute path="/dashboard" component={ExpenseDashBoardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;