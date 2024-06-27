/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import {
	Text,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
	TouchableOpacity,
} from "react-native";

const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		{children}
	</TouchableWithoutFeedback>
);

const CustomButton = ({
	onPress,
	text,
	type = "PRIMARY",
	bgColor,
	fgColor,
}) => {
	return (
		<DismissKeyboard>
			<TouchableOpacity
				style={[
					styles.container,
					styles[`container_${type}`],
					bgColor ? { backgroundColor: bgColor } : {},
				]}
				onPress={onPress}
			>
				<Text
					style={[
						styles.text,
						styles[`text_${type}`],
						fgColor ? { color: fgColor } : {},
					]}
				>
					{text}
				</Text>
			</TouchableOpacity>
		</DismissKeyboard>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "95%",
		padding: 15,
		marginVertical: 5,
		alignItems: "center",
	},
	container_PRIMARY: {
		backgroundColor: "#0045b5",
	},
	container_SECONDARY: {
		borderColor: "#0045b5",
		borderWidth: 2,
	},
	container_THIRD: {
		padding: 0,
	},
	text: {
		fontWeight: "bold",
		color: "white",
	},
	text_SECONDARY: {
		color: "#D3D3D3",
	},
	text_TERTIARY: {
		color: "#D3D3D3",
	},
	text_THIRD: {
		color: "#D3D3D3",
	},
	text_BUTTON: {
		fontFamily: "Nunito_800ExtraBold",
		textAlign: "center",
		borderColor: "#616363",
		borderWidth: 3,
		borderRadius: 10,
		color: "#616363",
		fontSize: 18,
		paddingHorizontal: "30%",
		paddingVertical: "5%",
	},
});
export default CustomButton;
