import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// const demoState = {
//     expenses: [{
//         id: 'sdfsffs',
//         description: 'rent',
//         note: 'for which month',
//         amount: 500,
//         createdAt: 0
//     },],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount', // date or amount
//         startDate: undefined,
//         endData: undefined
//     }
// };

// ADD_EXPENSE, REMOVE_EXPENSE, EDIT_EXPENSE, SET_TEXT_FILTER, 
// SORT_BY_DATE, SORT_BY_AMOUNT, SET_START_DATE, SET_END_DATE
const addExpense = (
    // the parameter following is for destructuring
    { 
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
const setTextFilter = (item = '') => ({
    type: 'SET_TEXT_FILTER',
    item
});
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});
const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
});
const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
});

const expenseReducerDefaultState = [];
const filterReducerDefaultState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endData: undefined
};

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => ( id !== action.id ));
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.item
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state;
    }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
// unsubscribe();
const expenseTwo = store.dispatch(addExpense({ description: 'coffee-rent', amount: 3, createdAt: -1000 }));
// store.dispatch(removeExpense({ id: expenseTwo.expense.id }));
// store.dispatch(editExpense(expenseOne.expense.id, { amount: 400 }));
store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));
// store.dispatch(setEndDate());

// object spreading
// const User = {
//     name: 'hongshen',
//     age: 26
// };
// console.log({
//     ...User,
//     location: 'New York'
// });

