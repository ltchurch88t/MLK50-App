import React from 'react';
import { StyleSheet, View } from 'react-native';
import Map from './components/map.js';
// import TextBox from './components/textbox.js';

export default class MapScreen extends React.Component {
  render() {
    return(
	  <View style={styles.mapContainer}>
		  <Map />
	  </View>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
  },
  infoBox: {
    height: 200,
  },
});
