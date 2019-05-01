import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
import BaseHeader from '../../../components/baseHeader';

class AgendaDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container>
            <BaseHeader back navigation={this.props.navigation} title="Agenda Detalhe" />
            <Content padder>
            </Content>
        </Container>
    );
  }
}

export default AgendaDetail;
