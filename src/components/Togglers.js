import React, { Component } from 'react';
import styled from 'styled-components';
import FlipMove from 'react-flip-move';
import { connect } from 'react-redux';
import Toggler from './Togglers/Toggler';
import { map } from './../utils/arrays';

const Container = styled.div.attrs({
  className: 'no-overflow-x auto-overflow-y w-100 gray-scroll'
})`
  @media (min-width: 768px){
    width: 50% !important;
  }
`

class Togglers extends Component {
                                                                           
  render(){
    const { settings } = this.props;
    const togglers = map(
      settings, 
      ({ title, tense, visible }, index) => <Toggler title={title} tense={tense} visible={visible}  key={tense} index={index} />
    );

    return (
        <Container>
          <FlipMove
            duration={200}
            staggerDurationBy={200}
            easing='cubic-bezier(0, 0, 0, 0.93)'
            children = { togglers } />
        </Container>
    )
  }
}

const mapStateToProps = ({ settings }) => ({
  settings
});

export default connect(mapStateToProps)(Togglers);