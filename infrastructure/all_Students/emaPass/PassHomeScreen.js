/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const EmaPassHome = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.bodyText}>
				If you need to see the Home Screen, hit the "Home" Button at the
				bottom...
			</Text>
			<View style={styles.break} />
			<TouchableOpacity
				style={styles.Button}
				onPress={() => navigation.navigate("Level 1 Breakdowns")}
			>
				<Text style={styles.headText}>Level 1 Breakdowns</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.Button}
				onPress={() => navigation.navigate("Level 2 Breakdowns")}
			>
				<Text style={styles.headText}>Level 2 Breakdowns</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.Button}
				onPress={() => navigation.navigate("Level 3 Breakdowns")}
			>
				<Text style={styles.headText}>Level 3 Breakdowns</Text>
			</TouchableOpacity>
			<View style={{ marginTop: 30, padding: 20 }}>
				<TouchableOpacity
					style={styles.Button}
					onPress={() => navigation.navigate("Month 2 Breakdowns")}
				>
					<Text style={styles.headText}>Month 2 Breakdowns</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.Button, { marginHorizontal: 60 }]}
					onPress={() => navigation.navigate("User Information")}
				>
					<Text style={styles.headText}>Get Status...</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default EmaPassHome;
