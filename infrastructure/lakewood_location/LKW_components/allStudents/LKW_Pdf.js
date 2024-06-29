/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
	ActivityIndicator,
	SafeAreaView,
	View,
	Button,
	Alert,
} from "react-native";
import WebView from "react-native-webview";
import styles, { COLORS } from "../../../all_Students/Styles";
import * as FileSystem from "expo-file-system";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";

const Pdf = ({ uri }) => {
	const pdfUrl = `https://ema-sidekick-lakewood-cf3bcec8ecb2.herokuapp.com/${uri}.pdf`;

	const savePdf = async () => {
		try {
			const fileUri = `${FileSystem.documentDirectory}${uri}.pdf`;
			const { uri: localUri } = await FileSystem.downloadAsync(pdfUrl, fileUri);
			console.log("PDF saved to:", localUri);
			if (await Sharing.isAvailableAsync()) {
				await Sharing.shareAsync(localUri);
			} else {
				Alert.alert("Sharing is not available on this device");
			}
		} catch (error) {
			console.error("Error saving PDF:", error);
		}
	};

	const printPdf = async () => {
		try {
			await Print.printAsync({ uri: pdfUrl });
		} catch (error) {
			console.error("Error printing PDF:", error);
		}
	};

	return (
		<View style={{ flex: 1, backgroundColor: COLORS.mediumGrey }}>
			<WebView
				style={{ flex: 1 }}
				source={{ uri: pdfUrl }}
				startInLoadingState={true}
				pullToRefreshEnabled
				renderLoading={() => <ActivityIndicator color="black" size="large" />}
			/>
			<View style={styles.btn}>
				<Button title="Save PDF" onPress={savePdf} />
				<Button title="Print PDF" onPress={printPdf} />
			</View>
		</View>
	);
};

export default Pdf;
