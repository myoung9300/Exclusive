/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import styles, { COLORS } from "../../../all_Students/Styles";

const LKW_Lvl3_Nav = ({ navigation }) => {
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.lakewoodBlue }}>
			<ScrollView>
				<TouchableOpacity
					onPress={() => navigation.navigate("LKW Level 3 Curriculum")}
				>
					<Text style={styles.area}>Curriculum Videos</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("Level 3 Manual")}>
					<Text style={styles.area}>Level 3 Manual</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate("Level 3 Standards")}
				>
					<Text style={styles.area}>Level 3 Standards</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate("Level 3 Checklist")}
				>
					<Text style={styles.area}>Level 3 Checklist</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate("LKW Level 3 Testing")}
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

export default LKW_Lvl3_Nav;
