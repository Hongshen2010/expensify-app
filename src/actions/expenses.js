import uuid from 'uuid';

export const addExpense = (
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
export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id: id
});
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
