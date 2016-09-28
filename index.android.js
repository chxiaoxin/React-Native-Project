/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator,
} from 'react-native';
import {Button,Icon} from 'native-base';
import Home from './portfolio_home';
import StockList from './portfolio_stocklist'
import StockInfo from './stock_info'
export default class NavButton extends Component {
  render() {
    return (
      <Button block primary
        onPress={this.props.onPress}>
        <Text style={{color:'white'}}>{this.props.text}</Text>
      </Button>
    );
  }
}
class portfolio extends Component {
  renderfunc(route,navigator){
    if(route.message==='home')
      return <Home message={route.message}
            navigator={navigator} />;
    if(!isNaN(parseInt(route.message))){
      return <StockList filterID={route.message} navigator={navigator} detail={route.detail}/>
    }
    else{
      return <StockInfo price={route.message} navigator={navigator} detail={route.detail}/>
    }
  }
  render() {
    return (
      <Navigator
        initialRoute={{ message: 'home',detail:'home'}}
        renderScene={this.renderfunc}
      />
    );
  }
}
AppRegistry.registerComponent('portfolio', () => portfolio);