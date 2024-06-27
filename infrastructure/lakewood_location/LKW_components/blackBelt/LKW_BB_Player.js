/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import styles, { COLORS } from "../../../all_Students/Styles";
import MiniCard from "../../../all_Students/youTube/MiniCard";

const PlaylistKey = "PLTCcbu_9GgThZG0-ooIS3GK0OZwvJL5uI";
const API_KEY = "AIzaSyDGdX_6R680MoskUWKy47IBIT7BI8l9H5k";

const LKW_BB_Player = () => {
	const [miniCardData, setMiniCard] = useState("");
	const [loading, setLoading] = useState(true);
	const fetchData = () => {
		fetch(
			`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PlaylistKey}&maxResults=50&key=${API_KEY}`
		)
			.then((res) => res.json())
			.then((data) => {
				setMiniCard(data.items);
				setLoading(false);
			});
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<View style={{ flex: 1, backgroundColor: COLORS.lakewoodBlue }}>
			<FlatList
				onRefresh={() => fetchData()}
				refreshing={loading}
				data={miniCardData}
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
				keyExtractor={(item) => item.snippet.resourceId.videoId}
			/>
		</View>
	);
};

export default LKW_BB_Player;
