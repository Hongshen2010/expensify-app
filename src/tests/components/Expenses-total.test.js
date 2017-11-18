import selectExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Return 0 if no expense', () => {
    const res = selectExpenseTotal([]);
    expect(res).toBe(0);
});
test('Return total expense test', () => {
    const res = selectExpenseTotal(expenses);
    expect(res).toBe(114195);
});