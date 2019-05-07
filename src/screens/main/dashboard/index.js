import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
import BaseHeader from '../../../components/baseHeader';

import { sha256 } from 'react-native-sha256';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let string;
    sha256('test').then(hash => {
      string = hash;
      console.log(string);

    })
  }

  render() {
    return (
      <Container>
        <BaseHeader showLogout navigation={this.props.navigation} title="Dashboard" />
        <Content padder>

          <Button onPress={() => this.props.navigation.navigate('Detail')}>
            <Text>Detalhes</Text>
          </Button>

        </Content>
      </Container>
    );
  }
}

export default Dashboard;
