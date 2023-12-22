// eslint-disable-next-line no-unused-vars
import React from "react";
import { SafeAreaView } from "react-native";
import WebView from "react-native-webview";

const PrivacyPolicy = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<WebView
				source={{
					uri: "https://www.emakarateprograms.com/privacypolicy",
				}}
			/>
		</SafeAreaView>
	);
};

export default PrivacyPolicy;
