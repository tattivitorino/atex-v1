import React from 'react';
import { View, Keyboard } from 'react-native';
import { Item, Input, Label, Body, Button, Text, Card, CardItem } from 'native-base';
import { TextInputMask } from 'react-native-masked-text';
import { Field, reduxForm } from 'redux-form';

import { connect } from 'react-redux';
import { tryLogin } from '../../actions';

import { validateEmail, validateRequired, validateMatchPasswords } from '../../utils';

import styles from './styles';

class FormSignup extends React.Component{ 
    constructor(props){
        super(props);

        this.inputs = {};
        this.renderInput = this.renderInput.bind(this);
        this.focusNext = this.focusNext.bind(this);

        this.signup = this.signup.bind(this);

    }

    signup(values){
        console.log(values);
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
                case 'nome':
                return (
                    <Input {...input} 
                    ref={ input => this.inputs[name] = input }
                    keyboardType="default"
                    textContentType="none"
                    autoCapitalize="words"
                    returnKeyType="next"
                    blurOnSubmit={ false }
                    onSubmitEditing={()=>{
                        this.focusNext('email');
                    }} />
                )

                case 'email':
                return (
                    <Input {...input} 
                    ref={ input => this.inputs[name] = input }
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                    returnKeyType="next"
                    blurOnSubmit={ false }
                    onSubmitEditing={()=>{
                        //this.focusNext('cpf');
                        console.log(this.inputs['cpf'])
                    }} />
                )

                case 'cpf':
                return (
                    <TextInputMask
                    ref={ input => this.inputs[name] = input }
                    keyboardType="numeric"
                    textContentType="none"
                    returnKeyType="next"
                    blurOnSubmit={ false }
                    onSubmitEditing={()=>{
                        //this.focusNext('password');
                        
                    }}
                    type={'cpf'}
                    customTextInput={Input}
                     />                   
                    
                )

                case 'password':
                return (
                    <Input {...input} 
                    ref={ input=> this.inputs[name] = input }
                    keyboardType="default"
                    textContentType="none"
                    returnKeyType="next"
                    secureTextEntry
                    blurOnSubmit={ false }
                    onSubmitEditing={()=>{
                        this.focusNext('password2');
                    }} />
                )

                case 'password2':
                return (
                    <Input {...input} 
                    ref={ input=> this.inputs[name] = input }
                    keyboardType="default"
                    textContentType="none"
                    returnKeyType="done"
                    secureTextEntry
                    blurOnSubmit={ true }
                    onSubmitEditing={()=>{
                        
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

    render(){
        //console.log('render login form')
        //console.log(this.props)
        const { handleSubmit, reset, pristine, submitting } = this.props;

        return (
            <Card style={styles.card}>
                <CardItem>
                    <Body>
                        <Text style={styles.text}>Preencha todos os campos abaixo.</Text>
                        <View style={styles.container}>

                            <Field label="Nome:" name="nome" component={this.renderInput} validate={[validateRequired]} />

                            <Field label="Email:" name="email" component={this.renderInput} validate={[validateRequired, validateEmail]} />

                            <Field label="CPF:" name="cpf" component={this.renderInput} validate={[validateRequired]} />
                            
                            <Field label="Senha:" name="password" component={this.renderInput} validate={[validateRequired]} />

                            <Field label="Confirmar Senha:" name="password2" component={this.renderInput} validate={[validateRequired, validateMatchPasswords]} />

                            <View style={styles.buttonsContainer}>
                                <Button disabled={pristine || submitting} light onPress={reset} style={styles.button}>
                                    <Text>Limpar</Text>
                                </Button>
                                <Button disabled={pristine || submitting} primary onPress={handleSubmit(this.signup)} style={styles.button}>
                                    <Text>Cadastrar</Text>
                                </Button>                    
                            </View>

                        </View>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

FormSignup = reduxForm({form:'signup', touchOnBlur:false})(FormSignup);

export default FormSignup;