import React, { useState } from "react";
import {
	SafeAreaView,
	Text,
	TouchableOpacity,
	ScrollView,
	Image,
	ActivityIndicator,
} from "react-native";

import styles, { COLORS } from "../../../all_Students/Styles";

import EMABlue from "../../../../assets/images/EMABlue.png";
import { ENTITLEMENT_ID } from "../../../all_Students/emaPass/passLoginFlow/packageItem";
import Purchases from "react-native-purchases";

const LKW_HomeScreen = ({ navigation }) => {
	const [loading, setLoading] = useState(false);

	const checkrcUser = async () => {
		setLoading(true); // Set loading state to true when starting the check
		try {
			const customerInfo = await Purchases.getCustomerInfo();
			if (
				typeof customerInfo.entitlements.active[ENTITLEMENT_ID] !== "undefined"
			) {
				navigation.navigate("EMA Pass Navigator");
			} else {
				navigation.navigate("Paywall Screen");
			}
		} catch (e) {
			// Handle error fetching customer info
			console.error("Error fetching customer info:", e);
			// Navigate to an error screen or handle the error state
		} finally {
			setLoading(false); // Mark loading as false after checking user info
		}
	};

	// Render loading indicator while fetching user info
	if (loading) {
		return (
			<SafeAreaView
				style={[styles.center, { backgroundColor: COLORS.lakewoodBlue }]}
			>
				<ActivityIndicator size="large" color="#ffffff" />
			</SafeAreaView>
		);
	}

	// Render the main content once loading is complete
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lakewoodBlue }}>
			<Image style={styles.logo} source={EMABlue} />
			<Text style={styles.text}>
				Scroll and click on your level below to view:
			</Text>
			<Text style={styles.smallText}>1. Video Curriculum</Text>
			<Text style={styles.smallText}>2. Belt Testing Registration</Text>
			<Text style={styles.smallText}>3. And MORE!!</Text>
			<ScrollView showsVerticalScrollIndicator={false}>
				<TouchableOpacity
					onPress={() => navigation.navigate("Lakewood Notifications")}
				>
					<Text style={[styles.area, { fontSize: 18, padding: 5 }]}>
						APP Notifications
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={checkrcUser}>
					<Text style={styles.area}>EMA Pass</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("LKW Basic")}>
					<Text style={styles.area}>Lil' Dragons & Basic</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("LKW Level 1")}>
					<Text style={styles.area}>Level 1</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("LKW Level 2")}>
					<Text style={styles.area}>Level 2</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("LKW Level 3")}>
					<Text style={styles.area}>Level 3</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("LKW Black Belt")}>
					<Text style={styles.area}>Black Belt</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate("LKW Exclusive")}>
					<Text style={styles.area}>Exclusive</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
};

export default LKW_HomeScreen;
