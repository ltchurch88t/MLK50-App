import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

export default class InfoScreen extends Component {
  render() {
    return(
      <View style={styles.infoContainer} />
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
