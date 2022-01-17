import React from 'react';
import { View, Text, Button } from 'react-native';

const MainScreen = ({route, navigation }) => {
	return <View>
		<Text>Main Screen</Text>
		<View style={{ height: 20 }} />
		<Button
			title='Test'
			onPress={()=>{
				console.log(route.name);
				navigation.push('Next');
			}}
		/>
	</View>;
}

export default MainScreen;