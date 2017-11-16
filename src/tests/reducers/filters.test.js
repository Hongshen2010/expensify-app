import filtersReducer  from '../../reducers/filters';
import moment from 'moment';

test('return DEFAULT filter value', () => {
    const state = filtersReducer(undefined, { type:'@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});
test('Start Date setter test', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});