/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";

import styles, { COLORS } from "../../../all_Students/Styles";

const LIT_Basic_Nav = ({ navigation }) => {
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.littletonBlue }}>
			<ScrollView>
				<TouchableOpacity
					onPress={() => navigation.navigate("LIT Basic Player")}
				>
					<Text style={styles.area}>Curriculum Videos</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate("LIT Dragon Testing")}
				>
					<Text style={styles.area}>Lil' Dragons Testing</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate("LIT Basic Testing")}
				>
					<Text style={styles.area}>Basic Testing</Text>
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

export default LIT_Basic_Nav;
