/* eslint-disable no-unused-vars */
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

import styles, { COLORS } from "../../../all_Students/Styles";

const LIT_Exclusive_Nav = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.littletonBlue }}>
			<View style={styles.break} />
			<View style={styles.break} />
			<View style={styles.break} />
			<Text style={styles.bigText}>Coming soon!</Text>
		</SafeAreaView>
	);
};

export default LIT_Exclusive_Nav;
