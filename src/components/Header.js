import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';

export const Header = ({ startLogOut }) => (
    <header>
        <h1>Expense records</h1>
        <NavLink exact to="/" activeClassName="is-active">Home </NavLink>
        <NavLink to="/create" activeClassName="is-active">create </NavLink>
        <NavLink to="/help" activeClassName="is-active">help</NavLink>
        <button onClick={startLogOut}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
});

export default connect(undefined, mapDispatchToProps)(Header);