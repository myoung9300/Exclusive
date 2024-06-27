/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, Text } from "react-native";
import * as Animatable from "react-native-animatable";
import Icon, { Icons } from "../../all_Students/Icons";
import styles from "../../all_Students/Styles";

import HomeStack_Nav from "../../all_Students/HomeStack_Nav";
import Class_Nav from "../../all_Students/Class_Nav";
import Schedule_Nav from "../../all_Students/Schedule_Nav";
import LKW_Portal from "../LKW_main_NAV/studentPortal/LKW_Portal";

const Tab = createBottomTabNavigator();

const TabArr = [
	{
		route: "Lakewood Navigator",
		label: "Home",
		type: Icons.Ionicons,
		activeIcon: "grid",
		inActiveIcon: "grid-outline",
		component: HomeStack_Nav,
	},
	{
		route: "Class Sign Up",
		label: "Class",
		type: Icons.MaterialCommunityIcons,
		activeIcon: "account-group",
		inActiveIcon: "account-group-outline",
		component: Class_Nav,
	},
	{
		route: "Schedule",
		label: "Schedule",
		type: Icons.MaterialCommunityIcons,
		activeIcon: "clock",
		inActiveIcon: "clock-outline",
		component: Schedule_Nav,
	},
	{
		route: "Student Portal",
		label: "Portal",
		type: Icons.MaterialCommunityIcons,
		activeIcon: "checkbox-multiple-blank-circle",
		inActiveIcon: "checkbox-multiple-blank-circle-outline",
		component: LKW_Portal,
	},
];

const TabBarButton = ({ item, onPress, accessibilityState }) => {
	const focused = accessibilityState.selected;
	const viewRef = useRef(null);

	useEffect(() => {
		const handleAnimation = () => {
			if (viewRef.current) {
				if (focused) {
					viewRef.current.animate({
						0: { scale: 0.7 },
						1: { scale: 1.5 },
					});
				} else {
					viewRef.current.animate({
						0: { scale: 1.5 },
						1: { scale: 0.7 },
					});
				}
			}
		};

		handleAnimation();

		// Clean up animation on component unmount
		return () => {
			if (viewRef.current) {
				viewRef.current.stopAnimation();
			}
		};
	}, [focused]);

	return (
		<TouchableOpacity
			style={[styles.center, { flex: focused ? 1 : 0.7 }]}
			onPress={onPress}
			activeOpacity={1}
		>
			<Animatable.View ref={viewRef} duration={500} style={styles.center}>
				<Icon
					type={item.type}
					name={focused ? item.activeIcon : item.inActiveIcon}
					color={focused ? "#8c8c8c" : "#0045b5"}
				/>
				<Text style={[styles.btn, { color: focused ? "#0045b5" : "#8c8c8c" }]}>
					{item.label}
				</Text>
			</Animatable.View>
		</TouchableOpacity>
	);
};

const LakewoodNavigation = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			{TabArr.map((item, index) => (
				<Tab.Screen
					key={index}
					options={{
						tabBarShowLabel: true,
						tabBarButton: (props) => <TabBarButton {...props} item={item} />,
					}}
					name={item.route}
					component={item.component}
				/>
			))}
		</Tab.Navigator>
	);
};

export default LakewoodNavigation;
