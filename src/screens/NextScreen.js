import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeFragment from '../fragments/HomeFragment';
import SettingFragment from '../fragments/SettingFragment';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

function NextScreen({ route, navigation }) {
	return (
		<Tab.Navigator
			initialRouteName="Home"
		>
			<Tab.Screen name="Home" component={HomeFragment} />
			<Tab.Screen name="Settings" component={SettingFragment} />
		</Tab.Navigator>
	);
}

export default NextScreen;