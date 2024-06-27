/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import {
	SafeAreaView,
	View,
	TouchableOpacity,
	Text,
	ActivityIndicator,
} from "react-native";
import WebView from "react-native-webview";

import styles, { COLORS } from "../../../all_Students/Styles";

const LKW_Class_Signup = () => {
	const [canGoBack, setCanGoBack] = useState(false);
	const [canGoForward, setCanGoForward] = useState(false);
	const [currentUrl, setCurrentUrl] = useState("");

	const webviewRef = useRef(null);

	backButtonHandler = () => {
		if (webviewRef.current) webviewRef.current.goBack();
	};

	frontButtonHandler = () => {
		if (webviewRef.current) webviewRef.current.goForward();
	};
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lakewoodBlue }}>
			<View style={styles.tabBarContainer}>
				<TouchableOpacity onPress={backButtonHandler}>
					<Text style={styles.button}>Back</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={frontButtonHandler}>
					<Text style={styles.button}>Forward</Text>
				</TouchableOpacity>
			</View>
			<WebView
				source={{
					uri: "https://ema-sidekick-lakewood-cf3bcec8ecb2.herokuapp.com/student_classes",
				}}
				startInLoadingState={true}
				renderLoading={() => <ActivityIndicator color="black" size="large" />}
				ref={webviewRef}
				onNavigationStateChange={(navState) => {
					setCanGoBack(navState.canGoBack);
					setCanGoForward(navState.canGoForward);
					setCurrentUrl(navState.url);
				}}
			/>
		</SafeAreaView>
	);
};

export default LKW_Class_Signup;
