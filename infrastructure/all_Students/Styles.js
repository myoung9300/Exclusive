import { StyleSheet, StatusBar } from "react-native";

export const COLORS = {
	white: "#ffffff",
	mediumGrey: "#666",
	lakewoodBlue: "#0045b5",
	littletonBlue: "#2b79b5",
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
	},
	logo: {
		alignSelf: "center",
		borderRadius: 10,
		width: "90%",
		height: 120,
	},
	image: {
		marginTop: 10,
		width: 230,
		height: 230,
		borderRadius: 230 / 2,
	},
	smallImage: {
		width: "20%",
		height: "100%",
		borderRadius: 90 / 2,
	},
	title: {
		fontSize: 32,
		fontFamily: "Nunito_800ExtraBold",
		textAlign: "center",
	},
	subTitle: {
		fontSize: 26,
		fontFamily: "PatrickHandSC_400Regular",
		textAlign: "center",
		margin: 6,
	},
	text: {
		fontFamily: "PatrickHandSC_400Regular",
		textAlign: "center",
		color: "white",
		fontSize: 23,
	},
	smallText: {
		fontFamily: "PatrickHandSC_400Regular",
		fontSize: 16,
		textAlign: "center",
		color: "white",
	},
	bigText: {
		fontFamily: "Nunito_800ExtraBold",
		color: "white",
		fontSize: 40,
		textAlign: "center",
	},
	break: {
		padding: 16,
	},
	area: {
		padding: 30,
		margin: 10,
		borderRadius: 10,
		borderWidth: 3,
		borderColor: "white",
		fontSize: 30,
		fontFamily: "Nunito_800ExtraBold",
		color: "white",
		textAlign: "center",
	},
	center: {
		justifyContent: "center",
		alignItems: "center",
	},
	btn: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginBottom: 8,
		alignItems: "center",
		fontFamily: "PatrickHandSC_400Regular",
		fontSize: 20,
	},
	tabBarContainer: {
		paddingTop: 20,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		backgroundColor: "rgb(49,115,193)",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	button: {
		color: "white",
		paddingTop: 10,
		marginLeft: 20,
		marginRight: 20,
		paddingBottom: 10,
		fontSize: 24,
		fontWeight: "bold",
	},
	card: {
		flex: 1,
	},
	cardOutsideView: {
		margin: 5,
		padding: 30,
	},
	cardInsideView: {
		flexDirection: "row",
		alignItems: "center",
	},
	instructorProfileCard: {
		margin: 10,
	},
	instructorCardContent: {
		flexWrap: "wrap",
		flexDirection: "row",
		padding: 8,
		alignItems: "center",
	},
	instructorCardText: {
		marginTop: 3,
		marginLeft: 8,
		fontSize: 24,
		fontFamily: "PatrickHandSC_400Regular",
		textAlign: "center",
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
	rowFront: {
		backgroundColor: COLORS.white,
		borderRadius: 5,
		margin: 5,
		marginBottom: 15,
		shadowColor: COLORS.mediumGrey,
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
	},
	rowFrontVisible: {
		backgroundColor: COLORS.white,
		borderRadius: 5,
		padding: 10,
		marginBottom: 15,
	},
	details: {
		fontSize: 14,
		color: COLORS.mediumGrey,
	},
	hiddenButton: {
		position: "absolute",
		bottom: 20,
		right: 10,
		width: 10,
		height: 10,
		backgroundColor: "transparent", // Make the button invisible
	},
});

export default styles;
