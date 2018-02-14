import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from './components/map.js';
import TextBox from './components/textbox.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <Map />
        <View style={styles.directionBox}>
          <TextBox />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 2,
  },
  directionBox: {
    height: 50,
  },
});
