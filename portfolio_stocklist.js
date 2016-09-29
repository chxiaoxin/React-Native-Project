import React, { Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
import { 
  Header,
  Card,
  CardItem,
  Button,
  Title,
  Badge,
  List,
  ListItem,
  Icon
  } from 'native-base';
import NavButton from './index.android'
class IconButton extends Component{
  render(){
    return (
      <Icon name={this.props.name} onPress={this.props.onPress} style={{color:'white'}}/>
      );
  }
}
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
      <View style={{flex:1}}>
      	<Header>
      	<Button transparent><IconButton name='ios-arrow-back' onPress={() => this.props.navigator.pop()}  text='Back'/></Button>
        <Title>{this.props.detail}</Title>
      	</Header>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => (
            <View>
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
      </View>
    );
	}

} 