import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const LKW_SideKick = () => {
	return (
		<View style={styles.container}>
			<WebView
				source={{
					uri: "https://ema-sidekick-lakewood-cf3bcec8ecb2.herokuapp.com",
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

export default LKW_SideKick;
