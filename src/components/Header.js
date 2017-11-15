import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expense records</h1>
        <NavLink exact to="/" activeClassName="is-active">Home </NavLink>
        <NavLink to="/create" activeClassName="is-active">create </NavLink>
        <NavLink to="/help" activeClassName="is-active">help</NavLink>
    </header>
);

export default Header;