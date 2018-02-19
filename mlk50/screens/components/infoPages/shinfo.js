import React, { Component } from 'react';
import { Text, View, StyleSheet, } from 'react-native';

export default class SHInfo extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.title}>Test</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 3,
		alignItems: 'center',
	},
	title: {
		paddingTop: 20,
		textAlign: 'center',
		fontSize: 28,
	}
});

