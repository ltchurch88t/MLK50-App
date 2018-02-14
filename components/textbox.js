import React from 'react';
import {Text, View, StyleSheet,} from 'react-native';

export default class TextBox extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Click on a marker for more info!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    backgroundColor: '#BF0D0D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
});
