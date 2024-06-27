import { StyleSheet } from "react-native";

const loginStyle = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#81dbfc",
	},
	break: {
		padding: 16,
	},
	title: {
		color: "#616363",
		fontSize: 25,
		alignSelf: "center",
		fontWeight: "bold",
	},
	smallTitle: {
		padding: 12,
		color: "#D3D3D3",
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 14,
	},
	bodyText: {
		padding: 12,
		color: "#D3D3D3",
		textAlign: "center",
		fontSize: 16,
	},
	hyperlink: {
		color: "#ff00bb",
	},
	logo: {
		alignSelf: "center",
		borderRadius: 10,
		width: "90%",
		height: 120,
	},
	signOut: {
		fontFamily: "Nunito_800ExtraBold",
		textAlign: "center",
		borderColor: "white",
		borderWidth: 2,
		borderRadius: 10,
		color: "#ff00bb",
		fontSize: 18,
	},
});

export default loginStyle;
