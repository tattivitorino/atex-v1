import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
import BaseHeader from '../../../components/baseHeader';

class DashboardDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container>
            <BaseHeader back navigation={this.props.navigation} title="Dash Detalhe" />
            <Content padder>
            </Content>
        </Container>
    );
  }
}

export default DashboardDetail;
