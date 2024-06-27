/* eslint-disable no-unused-vars */
import React from "react";
import { View, ActivityIndicator } from "react-native";
import WebView from "react-native-webview";

const LIT_Lvl3_Testing = () => {
	return (
		<View style={{ flex: 1 }}>
			<WebView
				source={{
					uri: "https://ema-planner.herokuapp.com/testing_signup_level3",
				}}
				startInLoadingState={true}
				renderLoading={() => <ActivityIndicator color="black" size="large" />}
			/>
		</View>
	);
};

export default LIT_Lvl3_Testing;
