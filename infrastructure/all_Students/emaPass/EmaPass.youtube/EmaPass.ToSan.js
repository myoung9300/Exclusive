import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import styles from "../styles";

// import { API_KEY } from '../../basic/Basic.Player';
// import MiniCard from '../../Youtube/miniCard';

const PlaylistKey = "JiHBHcDCQXI";

const EmaPassToSan = (key) => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.break} />
			<Text style={styles.bigText}>Content Coming Soon!</Text>
		</SafeAreaView>
	);
	// const [Breakdown, setBreakdown] = useState('');
	// const [loading, setLoading] = useState(false);
	// const fetchData = () => {
	// 	fetch(
	// 		`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PlaylistKey}&maxResults=50&key=${API_KEY}`
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setBreakdown(data.items);
	// 			setLoading(false);
	// 		});
	// };
	// useEffect(() => {
	// 	fetchData();
	// }, []);
	// return (
	// 	<SafeAreaView style={styles.container}>
	// 	<FlatList
	// 		data={Breakdown}
	// 		onRefresh={() => fetchData()}
	// 		refreshing={loading}
	// 		keyExtractor={(item) => item.snippet.resourceId.videoId}
	// 		renderItem={({ item }) => (
	// 			<MiniCard
	// 				id={item.id}
	// 				channel={item.snippet.channelTitle}
	// 				videoId={item.snippet.resourceId.videoId}
	// 				title={item.snippet.title}
	// 				description={item.snippet.description}
	// 			/>
	// 		)}
	// 	/>
	// 	</SafeAreaView>
	// )
};

export default EmaPassToSan;
