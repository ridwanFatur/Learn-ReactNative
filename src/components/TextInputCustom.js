import React, { useState } from 'react';
import {
	Text,
	View,
	SafeAreaView,
	StatusBar,
	TextInput,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native';

const TextInputCustom = React.forwardRef((props, ref) => {
	const [focus, setFocus] = useState(false);

	return (
		<View style={{
			flexDirection: 'row',
		}}>
			<TextInput
				{...props}
				ref={ref}
				onBlur={() => {
					setFocus(false);
				}}
				onFocus={() => {
					setFocus(true);
				}}
				style={{
					borderWidth: focus ? 2 : 1,
					borderColor: 'blue',
					borderRadius: 10,
					paddingHorizontal: 10,
					paddingVertical: 10,
					fontSize: 13,
					color: 'black',
					flex: 1,
				}}
			/>
		</View>
	);
})

export default TextInputCustom;