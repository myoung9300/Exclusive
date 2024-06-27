import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useLocation } from "./components/LocationContext";
import LocationSelection from "./components/LocationSelection";
import LakewoodNavigation from "../infrastructure/lakewood_location/LKW_main_NAV/LKW_main_NAV";
import LittletonNavigation from "../infrastructure/littleton_location/LIT_main_NAV/LIT_main_NAV";
import TermsOfUse from "./components/TermsOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy";

const Stack = createStackNavigator();

const Location_Nav = () => {
	const { selectedLocation } = useLocation();
	const navigation = useNavigation();

	useEffect(() => {
		console.log("Location_Nav: selectedLocation changed to", selectedLocation);
		if (selectedLocation === "Lakewood") {
			navigation.navigate("Lakewood");
		} else if (selectedLocation === "Littleton") {
			navigation.navigate("Littleton");
		}
	}, [selectedLocation, navigation]);

	return (
		<Stack.Navigator initialRouteName="Location Selector">
			<Stack.Screen
				name="Location Selector"
				component={LocationSelection}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Terms of Use" component={TermsOfUse} />
			<Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />
			<Stack.Screen
				name="Lakewood"
				component={LakewoodNavigation}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Littleton"
				component={LittletonNavigation}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export default Location_Nav;
