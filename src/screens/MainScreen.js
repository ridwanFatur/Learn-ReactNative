import React, { useState, useRef } from 'react';
import { View, Text, ToastAndroid, TextInput, Image, PermissionsAndroid, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import LoginForm from '../components/Login';
import ModalDemo from '../components/Modal';
import PickerCustom from '../components/Picker';
import SliderDemo from '../components/Slider';
import TextInputCustom from '../components/TextInputCustom';

const MainScreen = () => {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={{ flex: 1 }}>
				<ScrollView>
					<View style={{ height: 20 }} />
					<View style={{ padding: 10 }}>
						<PickerCustom />
						<View style={{ height: 20 }} />
						<LoginForm />
						<View style={{ height: 20 }} />
						<ModalDemo/>
						<View style={{ height: 20 }} />
						<SliderDemo/>
					</View>

					<View style={{ height: 20 }} />
					<TouchableOpacity onPress={() => {

					}}>
						<View style={{ backgroundColor: 'blue', padding: 10, alignItems: 'center', borderRadius: 10, marginHorizontal: 10 }}>
							<Text style={{ color: 'white' }}>Next</Text>
						</View>
					</TouchableOpacity>
					<View style={{ height: 20 }} />

				</ScrollView>
			</View>
		</TouchableWithoutFeedback>
	);
}

export default MainScreen;