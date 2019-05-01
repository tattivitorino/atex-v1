import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import BaseHeader from '../../../components/baseHeader';
import FormPassword from '../../../components/forms/FormPassword';

import styles from '../styles';

class Password extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <BaseHeader back navigation={this.props.navigation} title="Recuperar Senha" />
                <Content padder>
                    <FormPassword />
                </Content>
            </Container>
        );
    }
}

export default Password;