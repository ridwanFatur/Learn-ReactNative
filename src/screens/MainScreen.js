import React from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MainScreen = () => {
	return <View>
		<Text>Main Screen</Text>
		<Button
			title='Download'
			onPress={() => {
				// var RNFS = require('react-native-fs');
				// var path = RNFS.DocumentDirectoryPath + '/image.jpg';
				// console.log(path);

				console.log("Testing");
			}}
		/>
		<TouchableOpacity onPress={() => {
			var RNFS = require('react-native-fs');
			var path = RNFS.ExternalStorageDirectoryPath + '/image.jpg';
			const ret = RNFS.downloadFile({
				fromUrl: "https://i.ytimg.com/vi/X8sIaD7rKFQ/maxresdefault.jpg",
				toFile: path,
				background: true,
			});

			ret.promise.then((res) => {
				console.log('Download finished.');
				// RNFS.completeHandlerIOS(jobId);
			}).catch(err => {
				console.log(err);
			});
		}}>
			<View style={{ marginTop: 20, padding: 10, backgroundColor: 'blue', marginHorizontal: 10, borderRadius: 20, alignItems: 'center' }}>
				<Text style={{ color: 'white' }}>Test</Text>
			</View>
		</TouchableOpacity>
	</View>;
}

export default MainScreen;