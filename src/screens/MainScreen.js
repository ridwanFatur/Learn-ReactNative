import React, { useState, useRef } from 'react';
import { View, Text, ToastAndroid, TextInput, Image, PermissionsAndroid, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import TextInputCustom from '../components/TextInputCustom';

const MainScreen = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [place, setPlace] = useState('');

	const refInputEmail = useRef();
	const refInputPlace = useRef();

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={{ flex: 1 }}>
				<ScrollView>
					<View style={{ height: 20 }} />
					<View style={{ paddingHorizontal: 10 }}>
						<TextInputCustom
							placeholder="Your Name"
							autoFocus={true}
							returnKeyType="next"
							value={name}
							onChangeText={value => {
								setName(value);
							}}
							onSubmitEditing={() => refInputEmail.current.focus()}
						/>
						<View style={{ height: 20 }} />
						<TextInputCustom
							placeholder="Your Email"
							keyboardType='email-address'
							returnKeyType="next"
							value={email}
							onChangeText={value => {
								setEmail(value);
							}}
							onSubmitEditing={() => refInputPlace.current.focus()}
							ref={refInputEmail}
						/>
						<View style={{ height: 20 }} />
						<TextInputCustom
							placeholder="Your Place"
							value={place}
							onChangeText={value => {
								setPlace(value);
							}}
							ref={refInputPlace}
						/>
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