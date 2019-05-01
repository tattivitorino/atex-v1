import React from 'react';
import { View, Keyboard } from 'react-native';
import { Item, Input, Label, Body, Button, Text, Card, CardItem } from 'native-base';
import { Field, reduxForm, formValueSelector } from 'redux-form';

import { connect } from 'react-redux';
import { login } from '../../actions';

import { validateEmail, validateRequired } from '../../utils';

import styles from './styles';

class FormLogin extends React.Component{    
    
    constructor(props){
        super(props);
        this.inputs = {};

        this.renderInput = this.renderInput.bind(this);
        this.focusNext = this.focusNext.bind(this);
        this.login = this.login.bind(this);
    }

    login(){
        Keyboard.dismiss();
        const { email, password } = this.props;
        this.props.login({ email, password })
        .then(user=>{
            console.log(user)
        })
        .catch(err=>{
            //console.log('CATCH FUNC ERR: ',err)
        })
    }

    focusNext(field){
        this.inputs[field]._root.focus()
    }

    renderInput({ input, label, type, meta:{touched, error, warning} }){
        //console.log(input, label, type);
        //console.log(this.inputs);
        
        var hasError = false;
        if(touched && error !== undefined){
            hasError = true;
        } 
        
        const getInput = name =>{            
            switch(name){
                case 'email':
                return (
                    <Input {...input} 
                    ref={ input => this.inputs['email'] = input }
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                    returnKeyType="next"
                    blurOnSubmit={ false }
                    onSubmitEditing={()=>{
                        this.focusNext('senha');
                    }} />
                )

                case 'password':
                return (
                    <Input {...input} 
                    ref={ input=> this.inputs['senha'] = input }
                    keyboardType="default"
                    textContentType="none"
                    returnKeyType="done"
                    secureTextEntry
                    blurOnSubmit={ true }
                    onSubmitEditing={()=>{
                        this.login()
                    }} />
                )

                default:
                return <Input {...input} />
            }
            
        }

        return(
            <Item underline error={hasError} stackedLabel style={styles.item}>
                <Label>{label}</Label>
                { getInput(input.name) }
                { hasError ? <Text danger style={styles.errorMessage}>{error}</Text> : null }
            </Item>
        );
    }

    renderError(){
        const { error } = this.props;
        //console.log('STATE ERROR', error)
        if(!error) return null;
        return(
            <View>
                <Text style={styles.errorMessage}>{error}</Text>
            </View>
        );
    }

    render(){
        
        const { handleSubmit, reset, pristine, submitting } = this.props;

        return (
            <Card style={styles.card}>
                <CardItem>
                    <Body>
                        <Text style={styles.text}>Se você já é cadastrado use o formulário abaixo para entrar.</Text>
                        <View style={styles.container}>

                            <Field label="Email:" name="email" component={this.renderInput} validate={[validateRequired, validateEmail]} />
                            
                            <Field label="Senha:" name="password" component={this.renderInput} validate={validateRequired} />

                            <View style={styles.buttonsContainer}>
                                <Button disabled={pristine || submitting} light onPress={reset} style={styles.button}>
                                    <Text>Limpar</Text>
                                </Button>
                                <Button disabled={pristine || submitting} primary onPress={handleSubmit(this.login)} style={styles.button}>
                                    <Text>Entrar</Text>
                                </Button>                    
                            </View>

                            { this.renderError() }

                        </View>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}



const selector = formValueSelector('login');

const mapStateToProps = state => {
    const { error } = state.auth;
    const { email, password } = selector(state, 'email', 'password');
    return { email, password, error }
}

FormLogin = connect(mapStateToProps, {login})(FormLogin);
FormLogin = reduxForm({form:'login', touchOnBlur:false})(FormLogin);

export default FormLogin;