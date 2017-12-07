import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
import ExpenseModal from './ExpenseModal';

class EditExpensePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedExpense: null };
    }
    handleDeleteExpense = () => {
        this.setState({ selectedExpense: this.props.expense });
    }
    clearSelectedExpense = () => {
        this.setState({selectedExpense: null});
    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={(expense) => {
                            this.props.dispatch(startEditExpense(this.props.expense.id, expense));
                            this.props.history.push('/');
                        }}
                    />
                    <button 
                        className="button button--secondary"
                        onClick={this.handleDeleteExpense}
                    >Remove Expense</button>
                    <ExpenseModal 
                        expense={this.props}
                        dispatch={this.props.dispatch}
                        match={this.props.match}
                        history={this.props.history}
                        selectedExpense={this.state.selectedExpense}
                        clearSelectedExpense={this.clearSelectedExpense}
                    />
                </div>
            </div>
        );
    }
};
// return a single expense instead of an array
const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});
const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense))
});
export default connect(mapStateToProps)(EditExpensePage);