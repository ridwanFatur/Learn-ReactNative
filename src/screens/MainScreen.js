import React from 'react';
import { View, Text } from 'react-native';
import SignatureCapture from 'react-native-signature-capture';

const MainScreen = () => {
	function _onSaveEvent(result) {
		//result.encoded - for the base64 encoded png
		//result.pathName - for the file path name
		console.log(result);
	}

	return <View style={{ flex: 1 }}>
		<SignatureCapture style={{ flex: 1 }} onSaveEvent={_onSaveEvent} />
	</View>;
}

export default MainScreen;