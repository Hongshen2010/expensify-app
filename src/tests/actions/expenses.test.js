import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    addExpense, 
    editExpense, 
    removeExpense,
    startAddExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('test REMOVE expense action', () => {
    const id = '123';
    const action = removeExpense(id);
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id
    });
});
test('test EDIT expense action', () => {
    const id = '123';
    const action = editExpense(id, {amount: 100});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates: {
            amount: 100
        }
    });
});
test('test ADD expense action', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});
test('Add Expense to database testing', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'keyboard',
        amount: '169',
        note: 'mechanical keyboard',
        createdAt: 10000000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});
test('Add Default Expense to database testing', (done) => {
    const store = createMockStore({});
    const expenseDefault = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };
    store.dispatch(startAddExpense(expenseDefault)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault);
        done();
    });
});
// test('test ADD expense DEFAULT action', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//                     description: '',
//                     note: '',
//                     amount: 0,
//                     createdAt: 0,
//                     id: expect.any(String)
//                 }
//     });
// });