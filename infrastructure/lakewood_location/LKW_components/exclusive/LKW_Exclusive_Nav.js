/* eslint-disable no-unused-vars */
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

import styles, { COLORS } from "../../../all_Students/Styles";

const LKW_Exclusive_Nav = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lakewoodBlue }}>
			<View style={styles.break} />
			<View style={styles.break} />
			<View style={styles.break} />
			<Text style={styles.bigText}>Coming soon!</Text>
		</SafeAreaView>
	);
};

export default LKW_Exclusive_Nav;
