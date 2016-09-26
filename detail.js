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
import NavButton from './index.android'
export default class Detail extends Component{
	constructor(props){
		var dataStore=require('./Portfolios');
		var data=dataStore['folio'];
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    	this.state = {
      	dataSource: ds.cloneWithRows(data[this.props.filterID]["components"])
    	};
	}
	render()
	{
	return (
      <View style={{flex:1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => (
            <View >
            <Text >{rowData.symbol}</Text>
            <Text >{rowData.companyName}</Text>
            <NavButton onPress={() => this.props.navigator.push({message:rowData.symbol}) } />
            </View>)}
        />
        <NavButton onPress={() => this.props.navigator.pop()} text='back' />
      </View>
    );
	}

} 