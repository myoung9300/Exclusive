/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import styles, { COLORS } from "../../../all_Students/Styles";

const LKW_BB_Nav = ({ navigation }) => {
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.lakewoodBlue }}>
			<ScrollView>
				<TouchableOpacity
					onPress={() => navigation.navigate("LKW BB Curriculum")}
				>
					<Text style={styles.area}>Video Curriculum</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("SWAT 1")}>
					<Text style={styles.area}>SWAT 1 Tasks</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate("Testing Sign-Up")}
				>
					<Text style={styles.area}>Belt Testing</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate("Intent-To-Promote")}
				>
					<Text style={styles.area}>Intent-To-Promote</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
};

export default LKW_BB_Nav;
