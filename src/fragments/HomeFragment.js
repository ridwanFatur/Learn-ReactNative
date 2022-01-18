import React, { useState, useRef } from 'react';
import { View, Text, ToastAndroid, TextInput, Image, PermissionsAndroid, Keyboard, TouchableWithoutFeedback, Button } from 'react-native';

const HomeFragment = (props) => {
	const gotoTestStackScreen = () => {
		props.navigation.navigate('Test');
	};
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Home!</Text>
			<Button title="Go to test stack screen" onPress={gotoTestStackScreen} />
		</View>
	);
};

export default HomeFragment;