import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { 
  Button,
  Header,
  Title,
  Badge,
  Icon,
  List,
  ListItem,
  } from 'native-base';
import NavButton from './index.android'
class TimeOptionBtn extends Component{
	render() {
    return (
      <Button transparent
        onPress={this.props.onPress}>
        <Text style={{color:'blue'}}>{this.props.text}</Text>
      </Button>
    );
  }
}
class IconButton extends Component{
	render(){
		return (
			<Icon name={this.props.name} onPress={this.props.onPress} style={{color:'white'}}/>
			);
	}
}
export default class StockInfo extends Component{
	constructor(props){
		super(props);
		this.state={
			time_option:'1y'
		}
	}
	render(){
		return (
			<View style={{flex:1}}>
			<Header>
			<Button transparent><IconButton name="ios-arrow-back" onPress={() => this.props.navigator.pop()} /></Button>
			<Title>{this.props.detail.companyName}</Title>
			</Header>
			<List>
			<ListItem>
			<View style={{flex:1,flexDirection:'row'}}>
			<View style={{flex:1}}>
			<TimeOptionBtn  style={{flex:1}} onPress={() => {
				this.setState({time_option:'1y'});
			} } text='1Y' name='ios-arrow-back'/>
			</View>
			<View style={{flex:1}}>
			<TimeOptionBtn  style={{flex:1}} onPress={() => {
				this.setState({time_option:'6m'});
			} } text='6M' name='ios-arrow-back'/>
			</View>
			<View style={{flex:1}}>
			<TimeOptionBtn  style={{flex:1}} onPress={() => {
				this.setState({time_option:'3m'});
			} } text='3M' name='ios-arrow-back'/>
			</View>
			<View style={{flex:1}}>
			<TimeOptionBtn  style={{flex:1}} onPress={() => {
				this.setState({time_option:'1m'});
			} } text='1M' name='ios-arrow-back'/>
			</View>
			<View style={{flex:1}}>
			<TimeOptionBtn  style={{flex:1}} onPress={() => {
				this.setState({time_option:'1d'});
			} } text='1D' name='ios-arrow-back'/>
			</View>
			</View>
			</ListItem>
			<ListItem>
			<View style={{flex:1,flexDirection:'row'}}>
			<View style={{flex:1}}>
			<Text>Segment:{this.props.detail.segment}</Text>
			</View>
			<View style={{flex:1}}>
			<Text>SharePrice:{this.props.detail.sharePrice}</Text>
			</View>
			</View>
			</ListItem>
			<ListItem>
			<View style={{flex:1,flexDirection:'row'}}>
			<View style={{flex:1}}>
			<Text>ThirtyDayReturn:{this.props.detail.thirtyDayReturn}</Text>
			</View>
			<View style={{flex:1}}>
			<Text>ThreeYearReturn:{this.props.detail.threeYearReturn}</Text>
			</View>
			</View>
			</ListItem>
			<ListItem>
			<View style={{flex:1,flexDirection:'row'}}>
			<View style={{flex:1}}>
			<Text>MarketCap:{this.props.detail.marketCap}</Text>
			</View>
			<View style={{flex:1}}>
			<Text>ShareWeight:{this.props.detail.shareWeight}</Text>
			</View>
			</View>
			</ListItem>
			<ListItem>
			<Image source={{uri:'http://chart.finance.yahoo.com/z?s='+this.props.company+'&t='+this.state.time_option+'&q=l&mmon&z=m&p=m50,m100'}} />
			</ListItem>
			</List>
			</View>
			)
	}
}

