import React from 'react';
import { mount } from 'enzyme';
import Card from './../components/ConjugatedCards/Card';
import Conjugate from 'turkish-conjugator';
import store from './../store';

describe('>>> <Card/> component <<<', () => {

  let CardWrapper;

  beforeEach(() => {
    CardWrapper = mount(
      <Card
        title='Aorist'
        conjugation={ Conjugate.it('olmak')[0].conjugation }
        isPositive={ true }
        store={ store }
        at={ 0 }
      />
    );
  })

  it('Text must change from positive conjugation to negative conjugation when props change', () => {
    expect(CardWrapper.find('CardConjugationRow').first().find('p').at(1).text())
      .toBe('olurum');

    CardWrapper.setProps({
      isPositive: false
    });

    expect(CardWrapper.find('CardConjugationRow').first().find('p').at(1).text())
      .toBe('olmam');
  })

  it('ClassName of CardTab must change from tab--active to empty string when isPositive is false', () => {

    let CardTabs = CardWrapper.find('CardTab');
    let firstTab = CardTabs.at(0);
    let secondTab = CardTabs.at(1);

    expect(firstTab.props().isPositive).toBe(true)
    expect(firstTab.find('div').first().hasClass('tab--active')).toBe(true)
    expect(secondTab.props().isPositive).toBe(false)
    expect(secondTab.find('div').first().hasClass('tab--active')).toBe(false)

    CardWrapper.setProps({
      isPositive: false
    })

    // re-assing
    CardTabs = CardWrapper.find('CardTab');
    firstTab = CardTabs.at(0);
    secondTab = CardTabs.at(1);

    expect(firstTab.props().isPositive).toBe(false)
    expect(firstTab.find('div').first().hasClass('tab--active')).toBe(false)
    expect(secondTab.props().isPositive).toBe(true)
    expect(secondTab.find('div').first().hasClass('tab--active')).toBe(true)
  })

})