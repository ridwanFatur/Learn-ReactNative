import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PickerCustom = () => {
	const [currency, setCurrency] = useState('US Dollar');
	return (
		<View style={styles.container}>
			<Text style={styles.formLabel} > Demo Form </Text>
			<View>
				<TextInput
					placeholder="Email" style={styles.inputStyle}/>
				<TextInput
					secureTextEntry={true}
					placeholder="Password"
					style={styles.inputStyle}
				/>
				<Picker
					selectedValue={currency}
					style={{color: 'white'}}
					onValueChange={currentCurrency => setCurrency(currentCurrency)}>
					<Picker.Item label="USD" value="US Dollars" />
					<Picker.Item label="EUR" value="Euro" />
					<Picker.Item label="NGN" value="Naira" />
				</Picker>
				<Text style={{
					fontSize: 30,
					color: '#fff',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
					Selected: {currency}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#356859',
		alignItems: 'center',
		justifyContent: 'center',
	},

	formLabel: {
		fontSize: 20,
		color: '#fff',
	},
	inputStyle: {
		marginTop: 20,
		width: 300,
		height: 40,
		paddingHorizontal: 10,
		borderRadius: 50,
		backgroundColor: '#b9e4c9',
	},
	formText: {
		alignItems: 'center',
		justifyContent: 'center',
		color: '#fff',
		fontSize: 20,
	},
	text: {
		color: '#fff',
		fontSize: 20,
	},
});

export default PickerCustom;