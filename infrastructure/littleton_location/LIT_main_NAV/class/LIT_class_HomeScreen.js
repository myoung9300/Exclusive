/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
	Image,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
	Alert,
} from "react-native";
import styles, { COLORS } from "../../../all_Students/Styles";

export default function LIT_class_HomeScreen({ navigation }) {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.littletonBlue }}>
			<Image
				source={require("../../../../assets/images/EMABlue.png")}
				style={styles.logo}
			/>
			<View style={styles.break} />
			<View>
				<Text style={styles.text}>Sign up for the following: </Text>
			</View>
			<ScrollView>
				<TouchableOpacity
					onPress={() => navigation.navigate("LIT Class Sign-Up")}
				>
					<Text style={styles.area}>Classes</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate("LIT Instructor Bios")}
				>
					<Text style={styles.area}>Instructor Private Lessons</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("LIT Semi PVT")}>
					<Text style={styles.area}>Semi-Private Class</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
}
