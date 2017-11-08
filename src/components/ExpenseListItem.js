import React from 'react';
import { Link } from 'react-router-dom';
import ExpenseList from './ExpenseList';
import { connect } from 'react-redux';

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

const mapStateToPorps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default connect(mapStateToPorps)(ExpenseListItem);