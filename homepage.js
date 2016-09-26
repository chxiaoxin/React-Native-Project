import React, { Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  ListView,
  Navigator
} from 'react-native';

export default class homepage extends Component {
  constructor(props) {
    super(props);
    var dataStore=require('./Portfolios');
    dataStore['folio'][0].imageSource=require('./precious_metals.jpg');
    dataStore['folio'][1].imageSource=require('./shale_gas.jpg');
    dataStore['folio'][2].imageSource=require('./shale_oil.jpg');
    dataStore['folio'][3].imageSource=require('./black_gold.jpg');
    dataStore['folio'][4].imageSource=require('./3d_printing.jpg');
    dataStore['folio'][5].imageSource=require('./swell_improve_education.jpg');
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(dataStore['folio'])
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView  style={{width:250}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => (
            <View >
            <Text style={{color:'black'}}>{rowData.name}</Text>
            <Image source={rowData.imageSource} style={styles.images}/>
            <Text style={{color:'red'}}>{rowData.inceptionReturn}</Text>
            </View>)}
        />
      </View>
    );
  }
//   const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white'
//   },
//   images: {
//     flex: 1,
//     width:250,
//     height:150,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     paddingBottom:200
//   }
// });
}
