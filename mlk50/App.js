import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import MapScreen from './screens/mapscreen.js';
// import InfoScreen from './screens/infoscreen.js';
import { StackNavigator } from 'react-navigation';
import SHInfo from './screens/components/infoPages/shinfo.js';
import LInfo from './screens/components/infoPages/linfo.js';

export default class App extends Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <MapScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
