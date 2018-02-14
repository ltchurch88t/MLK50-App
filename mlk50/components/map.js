import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 35.1582,
        longitude: -90.0034,
        latitudeDelta: 0.0922*2,
        longitudeDelta: 0.0421*2,
      },
        lorraineMotel:{
            latitude: 35.1345,
            longitude: -90.0574,
      },
      uOfM: {
            latitude: 35.1186,
            longitude: -89.9372,
      },
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.region}
          style={styles.map}>
          <Marker coordinate={this.state.lorraineMotel} />
          <Marker coordinate={this.state.uOfM} />
        </MapView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: '100%',
    width: '100%',
  }
});
