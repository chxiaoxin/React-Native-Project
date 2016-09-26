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
import {Button} from 'native-base';
import Home from './home';
import Detail from './detail'
import Price from './price'
export default class NavButton extends Component {
  render() {
    return (
      <Button block transparent info
        onPress={this.props.onPress}>
        <Text style={{color:'#00ced1'}}>{this.props.text}</Text>
      </Button>
    );
  }
}
class portfolio extends Component {
  renderfunc(route,navigator){
    if(route.message==='home')
      return <Home message={route.message}
            navigator={navigator} />;
    if(parseInt(route.message)<=Number.MAX_SAFE_INTEGER){
      return <Detail filterID={route.message} navigator={navigator} />
    }
    else{
      return <Price price={route.message} navigator={navigator} />
    }
  }
  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ message: 'home'}}
        renderScene={this.renderfunc}
      />
    );
  }
}
const styles = StyleSheet.create({
   container: {
    flex: 1,
   },
   messageText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD',
  },
});

AppRegistry.registerComponent('portfolio', () => portfolio);