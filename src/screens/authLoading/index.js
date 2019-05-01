import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Content, Spinner } from 'native-base';

import material from '../../../native-base-theme/variables/material';
import firebase from 'firebase';

export default class AuthLoading extends Component {
    constructor(props) {
        super(props);
        //this._bootstrapAsync()
    }

    _bootstrapAsync = async ()=>{
        const token = await AsyncStorage.getItem('userToken');
        setTimeout(()=>{
            this.props.navigation.navigate(token ? 'App' : 'Auth');
        }, 2000)
    }

    componentWillMount(){
        const unsubscribe = firebase.auth()
        .onAuthStateChanged(user=>{
            //console.log(user)
            this.props.navigation.navigate(user ? 'App' : 'Auth');
            unsubscribe()
        })
    }

    render() {
        return (
            <Container>
                <Content contentContainerStyle={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                    <Spinner color={material.brandAtex} />
                </Content>
            </Container>
        );
    }
}

