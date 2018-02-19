import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class LInfo extends Component {
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
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		textAlign: 'center',
		fontSize: 28,
	}
});
