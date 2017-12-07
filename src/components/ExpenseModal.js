import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { startRemoveExpense } from '../actions/expenses';

class ExpenseModal extends React.Component {
    render() {
        const { description, id } = this.props.expense;
        return (
            <Modal
                isOpen={!!this.props.selectedExpense}
                contentLabel="Delete Expense?"
                onRequestClose={this.props.clearSelectedExpense}
                closeTimeoutMS={200}
                ariaHideApp={false}
                className="modal"
            >
                <h3 className="modal__title">Delete the following Expense?</h3>
                <h4 className="modal__body">{description}</h4>
                <button
                    className="button"
                    onClick={() => {
                        this.props.dispatch(startRemoveExpense(id));
                        this.props.history.push('/');
                    }}
                >
                    Yes, delete it.
                </button>
                <button
                    className="button button--secondary"
                    onClick={() => {
                        this.props.history.push(this.props.match.url);
                    }}
                >
                    No, keep it.
                </button>
            </Modal>
        );
    };
}
const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.expense.match.params.id)
});
const mapDispatchToProps = (dispatch, props) => ({
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseModal);