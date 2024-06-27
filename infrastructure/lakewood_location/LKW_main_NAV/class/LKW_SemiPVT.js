/* eslint-disable no-unused-vars */
import React from "react";
import { SafeAreaView } from "react-native";
import WebView from "react-native-webview";

const LKW_SemiPVT = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<WebView
				overScrollMode="always"
				contentInsetAdjustmentBehavior="scrollableAxes"
				source={{
					uri: "https://www.signupgenius.com/go/9040848a8aa23a1ff2-exclusive",
				}}
			/>
		</SafeAreaView>
	);
};

export default LKW_SemiPVT;
