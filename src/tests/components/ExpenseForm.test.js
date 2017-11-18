import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('Expense form test', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Expense form with data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[2]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Error rendering with invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});
test('Description test on input change', () => {
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});
// test('Description test on input change', () => {
//     const value = 'New Note value';
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('textarea').simulate('change', {
//         target: { value }
//     });
//     expect(wrapper.state('note')).toBe(value);
// });
// test('Valid submission test', () => {
//     const onSubmitSpy = jest.fn();
//     // onSubmitSpy('hongshen', 'New York');
//     const wrapper = shallow(<ExpenseForm expense={expenses[0]} onsubmit={onSubmitSpy}/>);
//     // expect(onSubmitSpy).toHaveBeenCalledWith('hongshen', 'New York');
//     wrapper.find('form').simulate('submit', {
//         preventDefault: () => {}
//     });
//     expect(wrapper.state('error')).toBe('');
//     expect(onSubmitSpy).toHaveBeenCalled(expenses[0]);
// });