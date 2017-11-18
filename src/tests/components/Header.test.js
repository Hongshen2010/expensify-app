import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('Header rendering test', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    const wrapper = shallow(<Header />);
    // expect(wrapper.find('h1').text()).toBe('Expense records');
    expect(wrapper).toMatchSnapshot();
});