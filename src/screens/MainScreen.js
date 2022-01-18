import React, { useState } from 'react';
import { View, Text, ToastAndroid, TextInput, Image, PermissionsAndroid } from 'react-native';
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

	const saveImage = async () => {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
			);

			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				console.log('Permission granted');
				var RNFS = require('react-native-fs');
				var path = `${RNFS.ExternalStorageDirectoryPath}/MyApp`;
				RNFS.mkdir(path);
				// IMAGE
				path += '/image.jpg';
				RNFS.writeFile(path, result, 'base64')
					.then((success) => {
						console.log('Success');
					})
					.catch((err) => {
						console.log(err.message);
					});

				// TXT
				// path += '/data.txt';
				// RNFS.writeFile(path, "Testing", 'utf8')
				// 	.then((success) => {
				// 		console.log('Success');
				// 	})
				// 	.catch((err) => {
				// 		console.log(err.message);
				// 	});
			} else {
				console.log('Permission denied');
			}
		} catch (err) {
			console.log(err);
		}
	}

	const LoadingSection = () => {
		if (isLoading) {
			return <Text>Loading...</Text>;
		}
		else if (isError) {
			return <Text>{result}</Text>;
		}
		else {
			if (result == '') {
				return <Text>Data is Empty</Text>
			} else {
				console.log("The Image");
				return (
					<View>
						<Image
							style={{ width: 100, height: 100, marginHorizontal: 10 }} source={{ uri: `data:image/png;base64,${result}` }} />
						<View style={{ height: 20 }} />
						<View>
							<TouchableOpacity onPress={() => { saveImage(); }}>
								<View style={{ backgroundColor: 'blue', padding: 10, alignItems: 'center', borderRadius: 10, marginHorizontal: 10 }}>
									<Text style={{ color: 'white' }}>Save Image</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				);
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