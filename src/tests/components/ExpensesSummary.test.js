import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Test summary component', () => {
    const wrapper = shallow(<ExpensesSummary 
                                expenseCount={1}
                                expensesTotal={114195}
                            />);
    expect(wrapper).toMatchSnapshot();
});