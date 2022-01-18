import React, { useState, useRef } from 'react';
import { View, Text, ToastAndroid, TextInput, Image, PermissionsAndroid, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import TextInputCustom from '../components/TextInputCustom';

const MainScreen = ({ route, navigation }) => {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={{ flex: 1 }}>
				<ScrollView>
					<TouchableOpacity onPress={() => {
						navigation.push('Next');
					}}>
						<View style={{ backgroundColor: 'blue', padding: 10, alignItems: 'center', borderRadius: 10, marginHorizontal: 10 }}>
							<Text style={{ color: 'white' }}>Next</Text>
						</View>
					</TouchableOpacity>


				</ScrollView>
			</View>
		</TouchableWithoutFeedback>
	);
}

export default MainScreen;