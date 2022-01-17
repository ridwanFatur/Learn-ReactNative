import React, { useRef } from 'react';
import { View, Text, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';

const MainScreen = () => {
	const ref_input2 = useRef();
	const ref_input3 = useRef();

	return <>
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={{ flex: 1, padding: 20 }}>
				<View style={{ height: 20 }} />
				<TextInput
					placeholder="Input1"
					autoFocus={true}
					returnKeyType="next"
					onSubmitEditing={() => ref_input2.current.focus()}
				/>
				<TextInput
					placeholder="Input2"
					returnKeyType="next"
					onSubmitEditing={() => ref_input3.current.focus()}
					ref={ref_input2}
				/>
				<TextInput
					placeholder="Input3"
					ref={ref_input3}
				/>
			</View>
		</TouchableWithoutFeedback>

	</>;
}

export default MainScreen;