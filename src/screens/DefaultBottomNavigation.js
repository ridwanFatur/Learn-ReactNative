import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeFragment from '../fragments/HomeFragment';
import SettingFragment from '../fragments/SettingFragment';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

function DefaultBottomNavigation({ route, navigation }) {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			// activeColor="#f0edf6"
			// inactiveColor="#3e2465"
			barStyle={{ backgroundColor: '#694fad' }}
		>
			<Tab.Screen name="Home" component={HomeFragment}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color }) => (
						<Icon name="home" size={20} color={color} />
					),
				}} />
			<Tab.Screen name="Settings" component={SettingFragment}
				options={{
					tabBarLabel: 'StackOverFlow',
					tabBarIcon: ({ color }) => (
						<Icon name="stack-overflow" size={20} color={color} />
					),
				}} />
		</Tab.Navigator>
	);
}

export default DefaultBottomNavigation;