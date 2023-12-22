import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./infrastructure/login-stack/Login_Nav";

export default function App() {
	return (
		<NavigationContainer>
			<Login />
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}
