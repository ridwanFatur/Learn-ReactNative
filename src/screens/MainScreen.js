import React from 'react';
import { View, Text, Button } from 'react-native';

const MainScreen = () => {
	return <View>
		<Text>Main Screen</Text>
		<Button
			title='Download'
			onPress={() => {
				console.log("Testing");
				var RNFS = require('react-native-fs');
				const ret = RNFS.downloadFile({
					fromUrl: "https://i.ytimg.com/vi/X8sIaD7rKFQ/maxresdefault.jpg",
					toFile: "Ridwan",
					background: true,
				});

				ret.promise.then((res) => {
					console.log('Download finished.');
					// RNFS.completeHandlerIOS(jobId);
					// jobId = -1;
				}).catch(err => {
					console.log('error');
					// jobId = -1;
				});
			}}
		/>
	</View>;
}

export default MainScreen;