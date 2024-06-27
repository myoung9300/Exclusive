/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";

import MiniCard from "../../../all_Students/youTube/MiniCard";
import { API_KEY } from "../../../lakewood_location/LKW_components/basic/LKW_Basic_Player";
import styles from "../styles";

const PlaylistKey = "PLTCcbu_9GgTgK2OY-JXaPMWYTHNii7gcb";

const EmaPassChonJi = () => {
	const [Breakdown, setBreakdown] = useState("");
	const [loading, setLoading] = useState(true);
	const fetchData = () => {
		fetch(
			`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PlaylistKey}&maxResults=50&key=${API_KEY}`
		)
			.then((res) => res.json())
			.then((data) => {
				setBreakdown(data.items);
				setLoading(false);
			});
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<View style={styles.container}>
			<FlatList
				data={Breakdown}
				onRefresh={() => fetchData()}
				refreshing={loading}
				keyExtractor={(item) => item.snippet.resourceId.videoId}
				renderItem={({ item }) => {
					return (
						<MiniCard
							id={item.id}
							channel={item.snippet.channelTitle}
							videoId={item.snippet.resourceId.videoId}
							title={item.snippet.title}
							description={item.snippet.description}
						/>
					);
				}}
			/>
		</View>
	);
};

export default EmaPassChonJi;
