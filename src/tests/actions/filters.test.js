import {
    setEndDate,
    setStartDate,
    setTextFilter,
    sortByAmount,
    sortByDate
} from '../../actions/filters';

test('END date setter test', () => {
    const date = 123;
    const action = setEndDate(date);
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: 123
    });
});
test('START date setter test', () => {
    const date = 123;
    const action = setStartDate(date);
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: 123
    });
});
test('TEXT setter test', () => {
    const text = 'set text test';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        item: 'set text test'
    })
});
test('TEXT DEFAULT setter test', () => {
    const text = '';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        item: ''
    });
});
test('AMOUNT sorting test', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});
test('DATE sorting test', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});