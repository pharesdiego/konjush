import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import LinkToVerb from './VerbsBox/LinkToVerb';
import Tab from './VerbsBox/Tab';
import { commonVerbs } from './../data/verbs';
import { createKey } from './../utils/keys';

const Container = styled.div.attrs({
  className: 'w-100 d-flex'
})``

const Box = styled.div.attrs({
  className: 'box-shape w-100 h-100 d-flex dir-column'
})`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.15);
`

const TabsContainer = styled.div.attrs({
  className: 'd-flex'
})`
  min-height: 35px;
`

const BoxOfVerbsWithLinks = styled.div.attrs({
  className: 'white-scroll auto-overflow-y'
})``;

class VerbsBox extends Component {

  constructor(props){
    super(props);
    this.state = { seeRecentVerbs: true }
  }

  shouldComponentUpdate(_, nextState){
    return (this.state.seeRecentVerbs !== nextState.seeRecentVerbs) && this.props.conjugator.recentVerbs.length > 0;
  }

  seeCommonVerbs = _ => this.setState({ seeRecentVerbs: false });
  seeRecentVerbs = _ => this.setState({ seeRecentVerbs: true });
  
  render(){
    const { conjugator } = this.props;
    const recentVerbs = conjugator.recentVerbs;
    // check if there are recent verbs and if the state say us to show them.
    const avaliableRecentVerbs = recentVerbs.length > 0 && this.state.seeRecentVerbs;
    // if there are avaliableRecentVerbs them we'll use recentVerbs array, else we'll use commonVerbs array for mapping.
    const verbsWithLinks = (avaliableRecentVerbs ? recentVerbs : commonVerbs)
                              .map((verb, i) => <LinkToVerb verb={ verb } index={i} key={verb + createKey()} />)

    return (
      <Container>
        <Box>
          <TabsContainer>
            <Tab
              seeTypeVerbs = { this.seeRecentVerbs }
              avaliableRecentVerbs = { avaliableRecentVerbs }
              text = 'Recent Verbs'/>
            
            <Tab
              seeTypeVerbs = { this.seeCommonVerbs }
              avaliableRecentVerbs = { !avaliableRecentVerbs }
              text = 'Common Verbs'/>
          </TabsContainer>
  
          <BoxOfVerbsWithLinks
            children = { verbsWithLinks } />

        </Box>
      </Container>
    )
  }
};

const mapStateToProps = ({ conjugator }) => ({
  conjugator
})

export default connect(mapStateToProps)(VerbsBox);