import React, { Component} from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Image
} from 'react-native';
export default class Price extends Component{
	render(){
		return (<View style={{width:350}}>
		<Image source={{uri:'http://chart.finance.yahoo.com/'+'z?s=AAPL&t=2y&q=l&l=on&z=m&p=m50,m200'}}  style={{width:350,height:205,
			alignItems:'center'}} />
		</View>)
	}
}
const styles=StyleSheet.create({
		btn:{
			flex:1,
			flexDirection:'row',
			justifyContent:'flex-start'
		}
	})