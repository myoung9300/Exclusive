// eslint-disable-next-line no-unused-vars
import React from "react";
import { SafeAreaView } from "react-native";
import WebView from "react-native-webview";

const TermsOfUse = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<WebView
				source={{
					uri: "https://www.emakarateprograms.com/termsofuse",
				}}
			/>
		</SafeAreaView>
	);
};

export default TermsOfUse;
