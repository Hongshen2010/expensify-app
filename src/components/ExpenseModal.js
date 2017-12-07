import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { startRemoveExpense } from '../actions/expenses';

const ExpenseModal = (props) => (
    <Modal
        isOpen={!!props.selectedExpense}
        contentLabel="Expense to be deleted"
        onRequestClose={props.clearSelectedExpense}
        closeTimeoutMS={200}
        ariaHideApp={false}
    >
        <h3>Expense to be deleted</h3>
        <button
            onClick={() => {
                props.expense.dispatch(startRemoveExpense(props.expense.expense.id));
                props.expense.history.push('/');
            }}
        >
            yes, delete it.
        </button>
    </Modal>
);
const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.expense.match.params.id)
});
const mapDispatchToProps = (dispatch, props) => ({
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(undefined, mapDispatchToProps)(ExpenseModal);