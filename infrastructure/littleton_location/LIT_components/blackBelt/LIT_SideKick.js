import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const LIT_SideKick = () => {
	return (
		<View style={styles.container}>
			<WebView
				source={{
					uri: "https://ema-planner.herokuapp.com",
				}}
				style={{ flex: 1 }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default LIT_SideKick;
