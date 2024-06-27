/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import styles, { COLORS } from "../../../all_Students/Styles";

const LIT_Lvl2_Nav = ({ navigation }) => {
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.littletonBlue }}>
			<ScrollView>
				<TouchableOpacity
					onPress={() => navigation.navigate("LIT Level 2 Curriculum")}
				>
					<Text style={styles.area}>Curriculum Videos</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("Level 2 Manual")}>
					<Text style={styles.area}>Level 2 Manual</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate("Level 2 Standards")}
				>
					<Text style={styles.area}>Level 2 Standards</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate("Level 2 Checklist")}
				>
					<Text style={styles.area}>Level 2 Checklist</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate("Level 2 Sparring Gear")}
				>
					<Text style={styles.area}>Level 2 Sparring Gear</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate("LIT Level 2 Testing")}
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

export default LIT_Lvl2_Nav;
