import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Container, Content, Button, Text } from 'native-base';

import { connect } from 'react-redux';

import Image from 'react-native-scalable-image';

import FormLogin from '../../../components/forms/FormLogin';
import Spinner from 'react-native-loading-spinner-overlay';

const { width } = Dimensions.get('window');
const logoImg = require('../../../../assets/imgs/logo.png');

import styles from '../styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navigateTo(page){
    this.props.navigation.navigate(page);
  }

  renderLoader(){
      const { loading } = this.props;
      if(loading) return (
          <Spinner 
          visible={loading} 
          textContent={'Verificando as suas credenciais...'}
          animation={'fade'}
          overlayColor={'rgba(0,0,0,0.7)'}
          textStyle={{color:'#fff'}} />
      );
      return null;
  }


  render() {
      return (
          <Container> 
              { this.renderLoader() }               
              <Content padder>
                  <View style={{alignItems:'center', paddingTop:30}}>
                      <Image width={width*0.6} source={logoImg} />
                  </View>
                  <FormLogin /> 
                  <View style={styles.buttonsContainer}>
                      <Button transparent primary style={styles.button} 
                      onPress={()=>{this.navigateTo('Password')}}>
                          <Text>Recuperar Senha</Text>
                      </Button>
                      <Button transparent primary style={styles.button} 
                      onPress={()=>{this.navigateTo('Terms')}}>
                          <Text>Termos e Condições</Text>
                      </Button>
                  </View>                 
              </Content>
          </Container>
      );
  }
}

const mapStateToProps = state => {
  const { loading } = state.auth;
  return { loading };
}

export default connect(mapStateToProps, null)(Login);
