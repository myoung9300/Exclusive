/* eslint-disable no-unused-vars */
import React from "react";
import { View, ActivityIndicator } from "react-native";
import WebView from "react-native-webview";
import { COLORS } from "../all_Students/Styles";

const BBTesting = () => {
	return (
		<WebView
			style={{ flex: 1, backgroundColor: COLORS.lakewoodBlue }}
			source={{
				uri: "https://ema-planner.herokuapp.com/testing_signup_blackbelt",
			}}
			startInLoadingState={true}
			renderLoading={() => <ActivityIndicator color="black" size="large" />}
		/>
	);
};

export default BBTesting;
