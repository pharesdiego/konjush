import React, { Fragment, Component} from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 28px;
  font-family: 'Pacifico';
`

const Subtitle = styled.div`
  margin-bottom: 10px;
  font-size: 17px;
`

const Section = class extends Component {
  
  shouldComponentUpdate(){
    return false;
  }

  render(){
    return (
    <Fragment>
      <Title className='w-100'>
        <p>{ this.props.title }</p>
      </Title>

      <Subtitle className='w-100'>
        <p>{ this.props.subtitle }</p>
      </Subtitle>
    </Fragment>
  )
  }
};

export default Section;