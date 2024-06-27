/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Nunito_800ExtraBold } from "@expo-google-fonts/nunito";
import { PatrickHandSC_400Regular } from "@expo-google-fonts/patrick-hand-sc";
import { useFonts } from "expo-font";

import { LocationProvider } from "./location_stack/components/LocationContext";
import Location_Nav from "./location_stack/Location_Nav";
import { Platform } from "react-native";
import Purchases from "react-native-purchases";

export default function App() {
	const APPLE_API_KEY = "appl_nKoGMTbJvrBnTdTNaFLeGJiDnYT";
	const GOOGLE_API_KEY = "goog_TSacEIjhJwIxuJSMitxdvWmWYAH";

	const EmaPassSetup = () => {
		useEffect(() => {
			const configurePurchases = async () => {
				Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);

				if (Platform.OS === "ios") {
					await Purchases.configure({ apiKey: APPLE_API_KEY });
				} else if (Platform.OS === "android") {
					await Purchases.configure({ apiKey: GOOGLE_API_KEY });
				}
			};

			configurePurchases();
		}, []);
	};

	let [fontsLoaded] = useFonts({
		Nunito_800ExtraBold,
		PatrickHandSC_400Regular,
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<NavigationContainer>
			<LocationProvider>
				<EmaPassSetup />
				<Location_Nav />
				<StatusBar style="auto" />
			</LocationProvider>
		</NavigationContainer>
	);
}
