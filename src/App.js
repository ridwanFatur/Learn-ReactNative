import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Main'>
				<Stack.Screen name="Main" component={MainScreen} />
			</Stack.Navigator></NavigationContainer>
	);
}

export default App;
