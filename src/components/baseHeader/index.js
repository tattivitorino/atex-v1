import React from 'react';
import { Header, Left, Body, Right, Icon, Title, Button } from 'native-base';

import { connect } from 'react-redux';
import { logout } from '../../actions';

import NavigationService from '../../services/NavigationService';

class BaseHeader extends React.Component{
    constructor(props){
        super(props);
    }
    
    renderLeft(){
        const { navigation, back } = this.props;
        if(back){
            return(
                <Left>
                    <Button transparent onPress={() => navigation.goBack(null)}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
            );
        }

        return (
            <Left>
                <Button transparent onPress={() => NavigationService.openDrawer()}>
                    <Icon name="menu" />
                </Button>
            </Left>
        );
    }

    renderRight(){
        const { showLogout, logout } = this.props;
        if(showLogout){
            return(
                <Right>
                    <Button transparent onPress={() => logout()}>
                        <Icon name="md-exit" />
                    </Button>
                </Right>
            );
        }
        return <Right />;
    }

    render(){
        const { title } = this.props;
        return (            
            <Header iosBarStyle="light-content">
                { this.renderLeft() }

                <Body>
                    <Title>{title ? title : 'ATEX'}</Title>
                </Body>

                { this.renderRight() }
                
            </Header>
        );
    }
}

export default connect(null, { logout })(BaseHeader);
