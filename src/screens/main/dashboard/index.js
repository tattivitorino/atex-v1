import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
import BaseHeader from '../../../components/baseHeader';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <BaseHeader showLogout navigation={this.props.navigation} title="Dashboard" />
        <Content padder>

          <Button onPress={()=>this.props.navigation.navigate('Detail')}>
            <Text>Detalhes</Text>
          </Button>
          
        </Content>
      </Container>
    );
  }
}

export default Dashboard;
