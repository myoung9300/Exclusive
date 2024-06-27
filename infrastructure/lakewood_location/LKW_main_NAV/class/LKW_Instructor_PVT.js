/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, memo } from "react";
import { FlatList, SafeAreaView, Text, View, Image } from "react-native";
import { Card } from "react-native-paper";

import styles, { COLORS } from "../../../all_Students/Styles";

const instructorURL = `https://raw.githubusercontent.com/myoung9300/Lakewood_instructors/main/Instructors.json`;

const LKW_Instructor_PVT = ({ navigation }) => {
	const [instructorData, setInstructorData] = useState([]);
	const [loading, setLoading] = useState(true);
	const fetchData = () => {
		fetch(instructorURL)
			.then((res) => res.json())
			.then((data) => {
				setInstructorData(data.instructors);
				setLoading(false);
			});
	};
	useEffect(() => {
		fetchData();
	}, []);
	const renderList = (item) => {
		return (
			<SafeAreaView style={styles.card}>
				<Card
					style={styles.cardOutsideView}
					onPress={() => navigation.navigate("Instructor Card", { item })}
				>
					<View style={styles.cardInsideView}>
						<Image style={styles.smallImage} source={{ uri: item.pic1 }} />
						<View style={{ marginLeft: 30 }}>
							<Text style={styles.title}>{item.name}</Text>
							<Text style={styles.subTitle}>{item.position}</Text>
						</View>
					</View>
				</Card>
			</SafeAreaView>
		);
	};
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lakewoodBlue }}>
			<FlatList
				data={instructorData}
				keyExtractor={({ id }, index) => id}
				renderItem={({ item }) => renderList(item)}
				onRefresh={fetchData}
				refreshing={loading}
			/>
		</SafeAreaView>
	);
};

export default LKW_Instructor_PVT;
