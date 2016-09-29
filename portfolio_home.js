/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  ListView,
  Image
} from 'react-native';
import { 
  Button,
  Icon,
  Header,
  Card,
  CardItem,
  Title,
  Badge,
  List,
  ListItem } from 'native-base';
import NavButton from './index.android';
class CondText extends Component{
  render(){
      return (parseFloat(this.props.Return)>0)? 
      (<View style={{flex:1,flexDirection:'row'}}>
        <View style={{flex:1}}>
        <Text>{this.props.returnType}</Text>
        </View>
        <View style={{flex:1}}>
        <Text style={{color:'red'}}>{this.props.Return}</Text>
        </View>
      </View>)
        :
      (<View style={{flex:1,flexDirection:'row'}}>
        <View style={{flex:1}}>
        <Text>{this.props.returnType}</Text>
        </View>
        <View style={{flex:1}}>
        <Text style={{color:'green'}}>{this.props.Return}</Text>
        </View>
      </View>)
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
    var images=[require('./precious_metals.jpg'),require('./shale_gas.jpg'),require('./shale_oil.jpg'),require('./black_gold.jpg'),require('./3d_printing.jpg'),require('./swell_improve_education.jpg')];
    return (
      <View style={{flex:1}}>
      <Header>
      <Title>Home</Title>
      <Button transparent><Icon name='ios-menu' /></Button>
      </Header>
        <ListView dataSource={this.state.dataSource} 
        renderRow={
          (rowData) => (
            <Card> 
            <CardItem>
            <Badge  danger>{rowData.name}</Badge>
            <List>
            <ListItem>
            <Image source={images[rowData.folioID]}/>
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
            <NavButton onPress={() => this.props.navigator.push({message:rowData.folioID,detail:rowData.name})} text='more' />
            </CardItem>
            </Card>
           )}
        />
      </View>
    );
}
}