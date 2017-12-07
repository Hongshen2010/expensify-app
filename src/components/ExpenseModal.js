import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { startRemoveExpense } from '../actions/expenses';

const ExpenseModal = (props) => {
    const { description, id } = props.expense;
    return (
        <Modal
            isOpen={!!props.selectedExpense}
            contentLabel="Delete Expense?"
            onRequestClose={props.clearSelectedExpense}
            closeTimeoutMS={200}
            ariaHideApp={false}
            className="modal"
        >
            <h3 className="modal__title">Delete the following Expense?</h3>
            <h4 className="modal__body">{description}</h4>
            <button
                className="button"
                onClick={() => {
                    props.dispatch(startRemoveExpense(id));
                    props.history.push('/');
                }}
            >
                Yes, delete it.
            </button>
            <button
                className="button button--secondary"
                onClick={() => {
                    props.history.push(props.match.url);
                }}
            >
                No, keep it.
            </button>
        </Modal>
    );
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.expense.match.params.id)
});
const mapDispatchToProps = (dispatch, props) => ({
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseModal);