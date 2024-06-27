/* eslint-disable no-unused-vars */
import React from "react";
import { View, ActivityIndicator } from "react-native";
import WebView from "react-native-webview";
import { COLORS } from "../../../all_Students/Styles";

const LKW_Lvl3_Testing = () => {
	return (
		<WebView
			style={{ flex: 1, backgroundColor: COLORS.lakewoodBlue }}
			source={{
				uri: "https://ema-sidekick-lakewood-cf3bcec8ecb2.herokuapp.com/testing_signup_level3",
			}}
			startInLoadingState={true}
			renderLoading={() => <ActivityIndicator color="black" size="large" />}
		/>
	);
};

export default LKW_Lvl3_Testing;
