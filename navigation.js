import React, { Component} from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  ListView,
  TouchableHighlight
} from 'react-native';
import portfolio from './index.android.js'
export default class Navigation extends Component{
	render(){
		return (<Navigator initialRoute={{id:-1}} renderScene={(route,navigator) => {
			if(route.id<0){
				return <portfolio />;
			}
			}
		} } />);
	}
} 
