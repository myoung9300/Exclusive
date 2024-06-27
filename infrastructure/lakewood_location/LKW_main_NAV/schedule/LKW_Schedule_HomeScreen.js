/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
	Image,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import styles, { COLORS } from "../../../all_Students/Styles";

const LKW_Schedule_HomeScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lakewoodBlue }}>
			<Image
				source={require("../../../../assets/images/EMABlue.png")}
				style={styles.logo}
			/>
			<View style={styles.break} />
			<Text style={styles.text}>View current Schedule and Calendar</Text>
			<View style={styles.break} />
			<TouchableOpacity
				onPress={() => navigation.navigate("LKW Weekly Schedule")}
			>
				<Text style={styles.area}>Weekly Schedule</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("LKW Calendar")}>
				<Text style={styles.area}>Monthly Calendar</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default LKW_Schedule_HomeScreen;
