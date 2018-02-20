import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

export default class Test extends Component {
	constructor() {
		super();
		this.state = {
		  coordinate: {
          latitude: 35.1345,
          longitude: -90.0574,
        },
        title: 'Lorraine Motel',
        description: 'Site of Dr. Martin Luther King\'s assasination',
        image: { uri: 'http://www.onthisveryspot.com/pics/spot_84_347.jpg' },
        info: 'Test',
		};
	}
	render() {
		return (
			<Text />
		);
	}
}
