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

const LIT_Schedule_Homescreen = ({ navigation }) => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.littletonBlue }}>
			<Image
				source={require("../../../../assets/images/EMABlue.png")}
				style={styles.logo}
			/>
			<View style={styles.break} />
			<Text style={styles.text}>View current Schedule and Calendar</Text>
			<View style={styles.break} />
			<TouchableOpacity
				onPress={() => navigation.navigate("LIT Weekly Schedule")}
			>
				<Text style={styles.area}>Weekly Schedule</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("LIT Calendar")}>
				<Text style={styles.area}>Monthly Calendar</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default LIT_Schedule_Homescreen;
