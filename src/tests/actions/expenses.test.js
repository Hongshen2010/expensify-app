import { 
    addExpense, 
    editExpense, 
    removeExpense 
} from '../../actions/expenses';

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
// test('test ADD expense action', () => {
//     const expense = {
//         description: 'testDescription', 
//         note: 'testNote', 
//         amount: 1999, 
//         createdAt: 2999 
//     }
//     const action = addExpense(expense);
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...expense,
//             id: expect.any(String)
//         }
//     });
// });
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