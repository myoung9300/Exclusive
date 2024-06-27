/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { View, TouchableHighlight, Text, Alert } from "react-native";
import styles from "../all_Students/Styles";

const VisableItem = (props) => {
	const { data } = props;

	const onPress = () => {
		Alert.alert(data.item.title, `Sent on: ${data.item.date}`);
	};

	return (
		<View style={styles.rowFront}>
			<TouchableHighlight onPress={onPress} style={styles.rowFrontVisible}>
				<View>
					<Text style={[styles.title, { fontSize: 28 }]} numberOfLines={2}>
						{data.item.title}
					</Text>
					<View style={styles.break} />
					<Text style={styles.details}>{data.item.message}</Text>
				</View>
			</TouchableHighlight>
		</View>
	);
};

export default VisableItem;
