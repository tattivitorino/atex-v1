import React, { Component } from 'react';
import { Dimensions, View, FlatList, StatusBar } from 'react-native';
import { Container, Content, Header, Footer, Text, ListItem, Icon, Left, Body, Right } from 'native-base';

import Image from 'react-native-scalable-image';

const {width} = Dimensions.get('window');
const sidebarWidth = width * 0.8;
const logo = require('../../../assets/imgs/logo.png');

import styles from './styles';

const routes = [
    {
        name:'Dashboard',
        route:'Dashboard',
        icon:'dashboard',
        iconType:'MaterialIcons',
    },
    {
        name:'Agenda',
        route:'Agenda',
        icon:'md-calendar',
        iconType:'Ionicons',
    },
    {
        name:'Clientes',
        route:'Clientes',
        icon:'md-person',
        iconType:'Ionicons',
    },
    {
        name:'Mais',
        route:'Mais',
        icon:'ios-more',
        iconType:'Ionicons',
    }
];

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
        itemSelected:routes[0]
    };
  }

  onItemPress = (item) => {
    this.setState({itemSelected:item})
    this.props.navigation.navigate(item.route);
  }

  render() {
    return (
      <Container>
          <Header iosBarStyle="light-content" style={styles.drawerHeader}>
            <Image width={sidebarWidth * 0.3} style={styles.drawerHeaderImage} source={logo} />
            <Text>Tatti Vitorino</Text>
            <Text>tatti@tattivitorino.com</Text>
          </Header>

          <Content 
          bounces={false}
          contentContainerStyle={[styles.drawerContent]}>

            <FlatList data={routes}
            extraData={this.state}
            renderItem={({ item })=>{
                return (
                    <ListItem 
                    style={[
                        styles.item,
                        this.state.itemSelected.route === item.route ? styles.itemActive : null
                    ]} icon noIndent noBorder button 
                    onPress={()=> this.onItemPress(item)}>
                        <Left>
                            <Icon name={item.icon} type={item.iconType} style={[styles.itemIcon]} />          
                        </Left>
                        <Body>                
                            <Text style={[styles.itemText, 
                            this.state.itemSelected.route === item.route ? styles.itemTextActive : null]}>
                            {item.name}
                            </Text>
                        </Body>
                        <Right />
                    </ListItem>
                );
            }}
            keyExtractor={data=>data.route} 
            />
            
          </Content>

          <Footer style={styles.drawerFooter}>
              <Text style={styles.drawerFooterText}>
                  Footer
              </Text>
          </Footer>
      </Container>
    );
  }
}

export default Sidebar;