import * as React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function MyTabBar({ state, descriptors, navigation }) {
	return (
		<View style={{
			flexDirection: 'row', backgroundColor: "#F4AF5F",
			height: 50, borderTopRightRadius: 20, borderTopLeftRadius: 20, justifyContent: "center", alignItems: "center"
		}}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
							? options.title
							: route.name;

				const isFocused = state.index === index;
				
				const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

				return (
					<TouchableOpacity
						accessibilityRole="button"
						accessibilityStates={isFocused ? ['selected'] : []}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						// onLongPress={onLongPress}
						style={{ flex: 1, alignItems: "center" }}
					>
						<Text style={{ color: isFocused ? 'white' : 'grey' }}>
							{label}
						</Text>
					</TouchableOpacity>
				);
			})}
		</View>
	);
}

export default MyTabBar;

