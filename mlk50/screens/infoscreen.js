import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Map from './components/map.js';
// import TextBox from './components/textbox.js';

export default class InfoScreen extends Component {
  render() {
    return(
      <View style={styles.infoContainer}>
        <Text>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
