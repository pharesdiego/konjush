import React from 'react';
import { shallow } from 'enzyme';
import Section from './../components/Section';

describe('>>> <Section/> must display each section properly <<<', function() {

  it('<Section/> must display text', function() {
    const wrapper = shallow(<Section title="About" subtitle="mission & how to contribute" />);
    expect(wrapper.find('p').at(0).html()).toMatchSnapshot();
    expect(wrapper.find('p').at(1).html()).toMatchSnapshot();
    expect(wrapper.find('p').length).toBe(2)
  })
  
})