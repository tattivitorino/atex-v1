import React from 'react';
import { View, Keyboard } from 'react-native';
import { Item, Input, Label, Body, Button, Text, Card, CardItem, Icon } from 'native-base';
import { Field, reduxForm } from 'redux-form';

import { connect } from 'react-redux';
import { recoverPassword } from '../../actions';

import { validateEmail, validateRequired } from '../../utils';

import styles from './styles';

class FormPassword extends React.Component{
    constructor(props){
        super(props);
        this.renderInput = this.renderInput.bind(this); 
        this.recoverPassword = this.recoverPassword.bind(this);       
    }

    recoverPassword(values){
        Keyboard.dismiss();
        const { email } = values;
        this.props.recoverPassword({email})
        .then(res=>{
            if(res){
                console.log('ok')
            }
        })
    }

    renderInput({ input, label, type, meta:{touched, error, warning} }){
        var hasError = false;
        if(touched && error !== undefined){
            hasError = true;
        }

        const getInput = name =>{            
            switch(name){
                case 'email':
                return (
                    <Input {...input} 
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                    returnKeyType="done"
                    blurOnSubmit
                    onSubmitEditing={()=>{}} />
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
                { hasError ? <Icon name="close-circle" /> : null}
            </Item>
        );
    }

    render(){
        const { handleSubmit, reset, pristine, submitting } = this.props;
        return (

            <Card style={styles.card}>
                <CardItem>
                    <Body>
                        <Text style={styles.text}>Digite o seu email abaixo para enviarmos uma nova senha.</Text>
                        <View style={styles.container}>

                            <Field label="Email:" name="email" component={this.renderInput} validate={[validateRequired, validateEmail]} />

                            <View style={styles.buttonsContainer}>
                                <Button disabled={pristine || submitting} light onPress={reset} style={styles.button}>
                                    <Text>Limpar</Text>
                                </Button>
                                <Button disabled={pristine || submitting} primary onPress={handleSubmit(this.recoverPassword)} style={styles.button}>
                                    <Text>Enviar</Text>
                                </Button>                    
                            </View>

                        </View>
                    </Body>
                </CardItem>
            </Card>

        );
    }
}

FormPassword = connect(null, {recoverPassword})(FormPassword);
FormPassword = reduxForm({form:'password'})(FormPassword);
export default FormPassword;