/* eslint-disable no-unused-vars */
import React from "react";
import { View, ActivityIndicator } from "react-native";
import WebView from "react-native-webview";
import { COLORS } from "../../../all_Students/Styles";

const LIT_Basic_Testing = () => {
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.littletonBlue }}>
			<WebView
				source={{
					uri: "https://ema-planner.herokuapp.com/testing_signup_Basic",
				}}
				startInLoadingState={true}
				renderLoading={() => <ActivityIndicator color="black" size="large" />}
			/>
		</View>
	);
};

export default LIT_Basic_Testing;
