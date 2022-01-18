import * as React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeFragment from '../fragments/HomeFragment';
import SettingFragment from '../fragments/SettingFragment';
import MyTabBar from '../components/MyTabBar';

const Tab = createBottomTabNavigator();

function NextScreen({ route, navigation }) {
	return (
		<Tab.Navigator tabBar={props => <MyTabBar {...props}/>}>
			<Tab.Screen name="Home" component={HomeFragment} options={{headerShown: false}}/>
			<Tab.Screen name="Settings" component={SettingFragment} options={{headerShown: false}}/>
		</Tab.Navigator>
	);
}

export default NextScreen;