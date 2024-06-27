/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import registerNNPushToken from "native-notify";
import axios from "axios";

import VisableItem from "../../../all_Students/VisableItem";
import styles, { COLORS } from "../../../all_Students/Styles";

const LKW_Notifications = () => {
	registerNNPushToken(20344, "bGZeVwZWq0trdEryvDmvR8");
	const [pushData, setPushData] = useState([]);
	const [loading, setLoading] = useState(true);

	const getData = () => {
		axios
			.get(
				`https://app.nativenotify.com/api/notification/inbox/20344/bGZeVwZWq0trdEryvDmvR8`
			)
			.then((res) => {
				setPushData(res.data.slice(0, 4));
				setLoading(false);
			});
	};
	useEffect(() => {
		getData();
	}, []);

	const renderItem = (data) => {
		return <VisableItem data={data} />;
	};

	return (
		<View style={{ flex: 1, backgroundColor: COLORS.lakewoodBlue }}>
			<Text style={[styles.bigText, { fontSize: 20 }]}>
				App notifications will show here
			</Text>
			<Text style={styles.smallText}>
				Click on a notification to see when it was sent...
			</Text>
			<FlatList
				data={pushData}
				refreshing={loading}
				onRefresh={() => getData()}
				keyExtractor={(item, index) => index}
				renderItem={renderItem}
			/>
		</View>
	);
};
export default LKW_Notifications;
