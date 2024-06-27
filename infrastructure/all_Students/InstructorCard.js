/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import {
	SafeAreaView,
	View,
	Linking,
	Text,
	Image,
	ScrollView,
} from "react-native";
import { Card } from "react-native-paper";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import styles, { COLORS } from "../all_Students/Styles";

const InstructorCard = (props) => {
	const { name, pic2, aboutMe, email, position, calendly } =
		props.route.params.item;
	return (
		<SafeAreaView style={{ backgroundColor: COLORS.littletonBlue }}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ alignItems: "center" }}>
					<Image style={styles.image} source={{ uri: pic2 }} />
				</View>
				<View>
					<Text style={styles.title}>{name}</Text>
					<Text style={styles.subTitle}>{position}</Text>
				</View>

				<Card style={styles.instructorProfileCard}>
					<View style={styles.instructorCardContent}>
						<Ionicons name="information-circle" size={32} color="#0045b5" />
						<Text style={styles.instructorCardText}>{aboutMe}</Text>
					</View>
				</Card>
				<Card
					style={styles.instructorProfileCard}
					onPress={() => {
						Linking.openURL(`mailto:${email}`);
					}}
				>
					<View style={styles.instructorCardContent}>
						<MaterialIcons name="email" size={32} color="#0045b5" />
						<Text style={styles.instructorCardText}>Have a question?</Text>
					</View>
				</Card>
				<Card
					style={styles.instructorProfileCard}
					onPress={() => {
						Linking.openURL(`${calendly}`);
					}}
				>
					<View style={styles.instructorCardContent}>
						<Ionicons name="calendar" size={32} color="#0045b5" />
						<Text style={styles.instructorCardText}>
							Schedule a private lesson
						</Text>
					</View>
				</Card>
			</ScrollView>
		</SafeAreaView>
	);
};

export default InstructorCard;
