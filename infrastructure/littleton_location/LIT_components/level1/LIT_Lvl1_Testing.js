/* eslint-disable no-unused-vars */
import React from "react";
import { View, ActivityIndicator } from "react-native";
import WebView from "react-native-webview";
import { COLORS } from "../../../all_Students/Styles";

const LIT_Lvl1_Testing = () => {
	return (
		<WebView
			style={{ flex: 1, backgroundColor: COLORS.littletonBlue }}
			source={{
				uri: "https://ema-planner.herokuapp.com/testing_signup_level1",
			}}
			startInLoadingState={true}
			renderLoading={() => <ActivityIndicator color="black" size="large" />}
		/>
	);
};

export default LIT_Lvl1_Testing;
