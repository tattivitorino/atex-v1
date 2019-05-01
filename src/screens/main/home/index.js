import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';

import { connect } from 'react-redux';
import { logout } from '../../../actions';

import BaseHeader from '../../../components/baseHeader';

class Home extends Component {
  constructor(props) {
    super(props);    
  }

  logout(){
    this.props.logout()
    .then(res=>{})
    .catch(err=>{})
  }

  render() {
    return (
      <Container>
        <BaseHeader navigation={this.props.navigation} title="Home" />
        <Content padder>
          <Button danger onPress={()=>{ this.logout() }}>
            <Text>Sair</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default connect(null, { logout })(Home);
