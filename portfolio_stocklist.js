import React, { Component} from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ListView
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
  ListItem,
  } from 'native-base';
import NavButton from './index.android'
export default class StockList extends Component{
	constructor(props){
		var dataStore=require('./Portfolios');
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    	this.state = {
      	dataSource: ds.cloneWithRows(dataStore['folio'][this.props.filterID]["components"])
    	};
	}
	render()
	{
	return (
      <View style={{flex:1,justifyContent:'center'}}>
      	<Header>
      	<Title>{this.props.detail}</Title>
      	</Header>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => (
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Card>
            <CardItem>
            <List>
            <ListItem>
            <Text>{rowData.companyName}</Text>
            <Badge warning>{rowData.oneYearReturn+'%'}</Badge>
            </ListItem>
            <NavButton onPress={() => this.props.navigator.push({message:rowData.symbol,detail:rowData}) } text='detail info' />
            </List>
            </CardItem>
            </Card>
            </View>)}
        />
        <NavButton onPress={() => this.props.navigator.pop()} name='ios-arrow-back' text='Back'/>
      </View>
    );
	}

} 