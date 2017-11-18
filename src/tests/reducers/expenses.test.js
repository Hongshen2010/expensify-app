import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('ADD expense test', () => {
    const expense = {
        id: '10',
        description: 'Mac',
        note: '',
        amount: 1,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        action.expense
    ]);
});
test('REMOVE by id test', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([
        expenses[1],
        expenses[2]
    ]);
});
test('REMOVE by id test, not found the same id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 100000
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});