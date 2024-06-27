// LocationSelection.js

import React, { useEffect } from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import EMABlue from "../../assets/images/EMABlue.png";
import CustomButton from "../components/CustomButton";
import { useLocation } from "../components/LocationContext";
import loginStyle from "../LocationStyles";

const LocationSelection = ({ navigation }) => {
	const { selectedLocation, setLocation } = useLocation();

	useEffect(() => {
		console.log("LocationSelection: selectedLocation is", selectedLocation);
		if (selectedLocation) {
			navigation.navigate(selectedLocation); // Navigate to the selected location screen
		}
	}, [selectedLocation, navigation]);

	const handleLocationSelect = (location) => {
		console.log(
			"LocationSelection: handleLocationSelect - location selected",
			location
		);
		setLocation(location); // Set the selected location in the context
		navigation.navigate(location); // Navigate to the selected location screen
	};

	return (
		<SafeAreaView style={loginStyle.container}>
			<Image style={loginStyle.logo} source={EMABlue} />
			<View style={loginStyle.break} />
			<View style={loginStyle.break} />
			<View style={loginStyle.break} />
			<Text style={loginStyle.title}>Which location do you train at?</Text>
			<CustomButton
				text="Lakewood"
				onPress={() => handleLocationSelect("Lakewood")}
				type="BUTTON"
			/>
			<CustomButton
				text="Littleton"
				onPress={() => handleLocationSelect("Littleton")}
				type="BUTTON"
			/>
		</SafeAreaView>
	);
};

export default LocationSelection;
