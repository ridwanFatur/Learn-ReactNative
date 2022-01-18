import React, { useState } from 'react';
import { View, Text, ToastAndroid, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

const MainScreen = () => {
	const [url, changeUrl] = useState('');
	const [result, changeResult] = useState('');
	const [isLoading, changeLoading] = useState(false);

	const requestAPI = async () => {
		changeLoading(true);
		try {
			const response = await axios.get(url);
			changeLoading(false);
			const myJSON = JSON.stringify(response.data);
			changeResult(response.status + '\n' + myJSON);
		} catch (error) {
			changeLoading(false);
			changeResult(error + '');
		}
	}

	const LoadingSection = () => {
		if (isLoading) {
			return <Text>Loading...</Text>;
		} else {
			if (result == '') {
				return <Text>Data is Empty</Text>
			} else {
				return <Text>{result}</Text>
			}
		}
	}

	return <View style={{ flex: 1 }}>
		<ScrollView>
			<View style={{ height: 20 }} />
			<View style={{ paddingHorizontal: 10 }}>
				<TextInput
					placeholder='URL'
					value={url}
					onChangeText={value => {
						changeUrl(value);
					}}
					style={{
						borderWidth: 1,
						borderColor: 'blue',
						borderRadius: 10,
						paddingHorizontal: 10,
						paddingVertical: 10,
						fontSize: 13,
					}}
				/>
			</View>
			<View style={{ height: 20 }} />
			<TouchableOpacity onPress={() => {
				requestAPI();
			}}>
				<View style={{ backgroundColor: 'blue', padding: 20, alignItems: 'center', borderRadius: 10, marginHorizontal: 10 }}>
					<Text style={{ color: 'white' }}>Request API</Text>
				</View>
			</TouchableOpacity>
			<View style={{ height: 20 }} />
			<View style={{ alignItems: 'center' }}>
				<LoadingSection />
			</View>

		</ScrollView>
	</View>;
}

export default MainScreen;