/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ListView,
  Image
} from 'react-native';
import { Container, Content, Button,Icon,Header,Card,CardItem,Title,Badge,List,ListItem } from 'native-base';

import NavButton from './index.android'
import Detail from './detail';
import ResponsiveImage from 'react-native-responsive-image';
var images=[require('./precious_metals.jpg'),require('./shale_gas.jpg'),require('./shale_oil.jpg'),require('./black_gold.jpg'),require('./3d_printing.jpg'),require('./swell_improve_education.jpg')];
class CondText extends Component{
  render(){
      return (parseFloat(this.props.Return)>0)? 
      (<View><Text>{this.props.returnType}</Text><Text style={{color:'red'}}><Icon name='ios-arrow-up' style={{color:'red'}}/>{this.props.Return}</Text></View>)
        :
      (<View><Text>{this.props.returnType}</Text><Text style={{color:'green'}}><Icon name='ios-arrow-down' style={{color:'green'}} />{this.props.Return}</Text></View>)
  }
}
export default class Home extends Component{
 constructor(props) {
    super(props);
    var dataStore=require('./Portfolios');
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(dataStore['folio'])
    };
  }
  render() {
    return (
      <View style={{flex:1}}>
      <Header>
      <Title>Home</Title>
      <Button><Icon name='ios-menu' /></Button>
      </Header>
        <ListView 
          dataSource={this.state.dataSource}
          renderRow={(rowData) => (
            <Card>
            <CardItem>
            <Badge  danger>{rowData.name}</Badge>
            <List>
            <ListItem>
            <Image source={images[rowData.folioID]} />
            </ListItem>
            <ListItem>
            <CondText Return={rowData.MoReturn} returnType={'Monthly return'}/>
            </ListItem>
            <ListItem> 
            <CondText Return={rowData.YrReturn} returnType={'Yearly return'}/>
            </ListItem>
            <ListItem> 
            <CondText Return={rowData.inceptionReturn} returnType={'Inceptional return'}/>
            </ListItem>
            </List>
            <NavButton onPress={() => this.props.navigator.push({message:rowData.folioID})} text='more'/>
            </CardItem>
            </Card>
           )}
        />
      </View>
    );
}
}