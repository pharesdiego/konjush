import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

const Component = styled.div`
  width: 100%;
  height: 100%;
`

const Main = Component.extend`
  position: absolute;
  top: 0;
`
const SectionLayout = styled.div.attrs({
  className: props => classNames(props.section + '-body', 'd-flex justify-center')
})`
  background-color: ${props => props.isHome ? 'transparent' : '#f1f1f1' };
  color: ${props => props.isHome ? 'white' : 'black'};
  height: calc(100% - 60px);
`

const Section = Component.extend.attrs({
  className: props => classNames(props.section + '-sections d-flex dir-column', props.addedClass)
})`
  padding: 25px;
  padding-bottom: 10px;
  max-width: 1440px;
`

const Layout = ({ section, addedClass = '', isHome, children }) => (
  <Component>
    <Main>
      <SectionLayout section={section} isHome={isHome}>
        <Section section={section} addedClass={addedClass}>
          { children }
        </Section>
      </SectionLayout>
    </Main>
  </Component>
);

export default Layout;