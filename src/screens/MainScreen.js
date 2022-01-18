import React, { useState } from 'react';
import { View, Text, ToastAndroid, TextInput, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
global.Buffer = global.Buffer || require('buffer').Buffer;

const MainScreen = () => {
	const [url, changeUrl] = useState('');
	const [result, changeResult] = useState('');
	const [isLoading, changeLoading] = useState(false);
	const [isError, changeError] = useState(false);

	const requestAPI = async () => {
		changeLoading(true);
		changeError(false);
		try {
			const response = await axios.get(url, { responseType: 'arraybuffer' });
			const base64 = Buffer.from(response.data, 'binary').toString(
				'base64',
			);
			changeLoading(false);
			changeResult(base64);
		} catch (error) {
			changeLoading(false);
			changeError(true);
			changeResult(error + '');
		}
	}

	const LoadingSection = () => {
		if (isLoading) {
			return <Text>Loading...</Text>;
		} 
		else if (isError){
			return <Text>{result}</Text>;
		}
		else {
			if (result == '') {
				return <Text>Data is Empty</Text>
			} else {
				console.log("The Image");
				return <Image
					style={{ width: 100, height: 100,}} source={{ uri: `data:image/png;base64,${result}` }} />
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
					<Text style={{ color: 'white' }}>Download Image</Text>
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