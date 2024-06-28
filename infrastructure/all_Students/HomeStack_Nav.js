import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LKW_HomeScreen from "../lakewood_location/LKW_components/allStudents/LKW_HomeScreen";
import LIT_HomeScreen from "../littleton_location/LIT_components/allStudents/LIT_HomeScreen";

import LKW_Notifications from "../lakewood_location/LKW_components/allStudents/LKW_Notifications";
import LIT_Notifications from "../littleton_location/LIT_components/allStudents/LIT_Notifications";

import LKW_Basic_Nav from "../lakewood_location/LKW_components/basic/LKW_Basic_Nav";
import LIT_Basic_Nav from "../littleton_location/LIT_components/basic/LIT_Basic_Nav";
import LKW_Basic_Player from "../lakewood_location/LKW_components/basic/LKW_Basic_Player";
import LIT_Basic_Player from "../littleton_location/LIT_components/basic/LIT_Basic_Player";
import LKW_Dragon_Testing from "../lakewood_location/LKW_components/basic/LKW_Dragon_testing";
import LIT_Dragon_Testing from "../littleton_location/LIT_components/basic/Lit_Dragon_testing";
import LKW_Basic_Testing from "../lakewood_location/LKW_components/basic/LKW_Basic_Testing";
import LIT_Basic_Testing from "../littleton_location/LIT_components/basic/Lit_Basic_Testing";

import Itp from "./ITP";
import Level1Checklist from "./Lvl1_Checklist";
import Lvl1_Manual from "./Lvl1_Manual";
import KarateHomeWork from "./KarateHomeworkCard";
import Level1Standards from "./Lvl1_Standards";
import Level1Spar from "./Lvl1_SparringGear";
import Level2Checklist from "./Lvl2_Checklist";
import Level2Manual from "./Lvl2_Manual";
import Level2Standards from "./Lvl2_Standards";
import Level2Spar from "./Lvl2_SparringGear";
import Level3Manual from "./Lvl3_Manual";
import Level3Standards from "./Lvl3_Standards";
import Level3Checklist from "./Lvl3_Checklist";
import BBTesting from "./BB_Testing";
import Swat1 from "./Swat_1";

import LKW_Lvl1_Nav from "../lakewood_location/LKW_components/level1/LKW_Lvl1_Nav";
import LKW_Lvl1_Player from "../lakewood_location/LKW_components/level1/LKW_Lvl1_Player";
import LIT_Lvl1_Nav from "../littleton_location/LIT_components/level1/LIT_Lvl1_Nav";
import LIT_Lvl1_Player from "../littleton_location/LIT_components/level1/LIT_Lvl1_Player";
import LKW_Lvl1_Testing from "../lakewood_location/LKW_components/level1/LKW_Lvl1_Testing";
import LIT_Lvl1_Testing from "../littleton_location/LIT_components/level1/LIT_Lvl1_Testing";

import LKW_Lvl2_Nav from "../lakewood_location/LKW_components/level2/LKW_Lvl2_Nav";
import LIT_Lvl2_Nav from "../littleton_location/LIT_components/level2/LIT_Lvl2_Nav";
import LKW_Lvl2_Player from "../lakewood_location/LKW_components/level2/LKW_Lvl2_Player";
import LIT_Lvl2_Player from "../littleton_location/LIT_components/level2/LIT_Lvl2_Player";
import LKW_Lvl2_Testing from "../lakewood_location/LKW_components/level2/LKW_Lvl2_Testing";
import LIT_Lvl2_Testing from "../littleton_location/LIT_components/level2/LIT_Lvl2_Testing";

import LKW_Lvl3_Nav from "../lakewood_location/LKW_components/level3/LKW_Lvl3_Nav";
import LIT_Lvl3_Nav from "../littleton_location/LIT_components/level3/LIT_Lvl3_Nav";
import LKW_Lvl3_Player from "../lakewood_location/LKW_components/level3/LKW_Lvl3_Player";
import LIT_Lvl3_Player from "../littleton_location/LIT_components/level3/LIT_Lvl3_Player";
import LKW_Lvl3_Testing from "../lakewood_location/LKW_components/level3/LKW_Lvl3_Testing";
import LIT_Lvl3_Testing from "../littleton_location/LIT_components/level3/LIT_Lvl3_Testing";

import LKW_BB_Nav from "../lakewood_location/LKW_components/blackBelt/LKW_BB_Nav";
import LIT_BB_Nav from "../littleton_location/LIT_components/blackBelt/LIT_BB_Nav";
import LKW_BB_Player from "../lakewood_location/LKW_components/blackBelt/LKW_BB_Player";
import LIT_BB_Player from "../littleton_location/LIT_components/blackBelt/LIT_BB_Player";
import LKW_SideKick from "../lakewood_location/LKW_components/blackBelt/LKW_SideKick";
import LIT_SideKick from "../littleton_location/LIT_components/blackBelt/LIT_SideKick";

import LKW_Exclusive_Nav from "../lakewood_location/LKW_components/exclusive/LKW_Exclusive_Nav";
import LIT_Exclusive_Nav from "../littleton_location/LIT_components/exclusive/LIT_Exclusive_Nav";
import { COLORS } from "./Styles";
import { useLocation } from "../../location_stack/components/LocationContext";

import PassNavigator from "./emaPass/passLoginFlow/PassNavigator";
import PaywallScreen from "./emaPass/passLoginFlow/PaywallScreen";
import LoadingScreen from "../../location_stack/components/LoadingScreen";

const HomeStack = createNativeStackNavigator();

const HomeStack_Nav = () => {
	const { selectedLocation } = useLocation();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (selectedLocation) {
			setIsLoading(false);
			console.log("Selected Location:", selectedLocation);
		}
	}, [selectedLocation]);

	if (isLoading) {
		return (
			<LoadingScreen /> // Show the loading screen until selectedLocation is set
		);
	}

	return (
		<HomeStack.Navigator
			screenOptions={{
				headerTitleStyle: { fontSize: 20, fontFamily: "Nunito_800ExtraBold" },
				headerBackTitleVisible: false,
				headerTintColor: "white",
			}}
		>
			{selectedLocation === "Lakewood" && (
				<HomeStack.Group
					screenOptions={{
						headerStyle: { backgroundColor: COLORS.lakewoodBlue },
					}}
				>
					<HomeStack.Screen
						name="Lakewood Home"
						options={{ headerShown: false }}
						component={LKW_HomeScreen}
					/>
					<HomeStack.Screen
						name="Lakewood Notifications"
						component={LKW_Notifications}
					/>
					<HomeStack.Screen
						name="LKW Basic"
						options={{ title: "Lil' Dragons & Basic" }}
						component={LKW_Basic_Nav}
					/>
					<HomeStack.Screen
						name="LKW Basic Player"
						options={{ title: "Lil' Dragon/Basic Videos" }}
						component={LKW_Basic_Player}
					/>
					<HomeStack.Screen
						name="LKW Dragon Testing"
						options={{ title: "Sign-Up" }}
						component={LKW_Dragon_Testing}
					/>
					<HomeStack.Screen
						name="LKW Basic Testing"
						options={{ title: "Sign-Up" }}
						component={LKW_Basic_Testing}
					/>
					<HomeStack.Screen
						name="LKW Level 1"
						options={{ title: "Level 1" }}
						component={LKW_Lvl1_Nav}
					/>
					<HomeStack.Screen
						name="LKW Level 1 Curriculum"
						options={{ title: "LVL 1 Videos" }}
						component={LKW_Lvl1_Player}
					/>
					<HomeStack.Screen
						name="LKW Level 1 Testing"
						options={{ title: "Sign-Up" }}
						component={LKW_Lvl1_Testing}
					/>
					<HomeStack.Screen
						name="LKW Level 2"
						options={{ title: "Level 2" }}
						component={LKW_Lvl2_Nav}
					/>
					<HomeStack.Screen
						name="LKW Level 2 Curriculum"
						options={{ title: "LVL 2 Videos" }}
						component={LKW_Lvl2_Player}
					/>
					<HomeStack.Screen
						name="LKW Level 2 Testing"
						options={{ title: "Sign-Up" }}
						component={LKW_Lvl2_Testing}
					/>
					<HomeStack.Screen
						name="LKW Level 3"
						options={{ title: "Level 3" }}
						component={LKW_Lvl3_Nav}
					/>
					<HomeStack.Screen
						name="LKW Level 3 Curriculum"
						options={{ title: "LVL 3 Videos" }}
						component={LKW_Lvl3_Player}
					/>
					<HomeStack.Screen
						name="LKW Level 3 Testing"
						options={{ title: "Sign-Up" }}
						component={LKW_Lvl3_Testing}
					/>
					<HomeStack.Screen
						name="LKW Black Belt"
						options={{ title: "Black Belt" }}
						component={LKW_BB_Nav}
					/>
					<HomeStack.Screen
						name="LKW BB Curriculum"
						options={{ title: "Black Belt Videos" }}
						component={LKW_BB_Player}
					/>
					<HomeStack.Screen name="HiddenWebview" component={LKW_SideKick} />
					<HomeStack.Screen
						name="LKW Exclusive"
						options={{ title: "Exclusive Weapons" }}
						component={LKW_Exclusive_Nav}
					/>
				</HomeStack.Group>
			)}
			{selectedLocation === "Littleton" && (
				<HomeStack.Group
					screenOptions={{
						headerStyle: { backgroundColor: COLORS.littletonBlue },
					}}
				>
					<HomeStack.Screen
						name="Littleton Home"
						options={{ headerShown: false }}
						component={LIT_HomeScreen}
					/>
					<HomeStack.Screen
						name="Littleton Notifications"
						component={LIT_Notifications}
					/>
					<HomeStack.Screen
						name="LIT Basic"
						options={{ title: "Lil' Dragons & Basic" }}
						component={LIT_Basic_Nav}
					/>
					<HomeStack.Screen
						name="LIT Basic Player"
						options={{ title: "Lil' Dragon/Basic Videos" }}
						component={LIT_Basic_Player}
					/>
					<HomeStack.Screen
						name="LIT Dragon Testing"
						options={{ title: "Sign-Up" }}
						component={LIT_Dragon_Testing}
					/>
					<HomeStack.Screen
						name="LIT Basic Testing"
						options={{ title: "Sign-Up" }}
						component={LIT_Basic_Testing}
					/>
					<HomeStack.Screen
						name="LIT Level 1"
						options={{ title: "Level 1" }}
						component={LIT_Lvl1_Nav}
					/>
					<HomeStack.Screen
						name="LIT Level 1 Curriculum"
						options={{ title: "LVL 1 Videos" }}
						component={LIT_Lvl1_Player}
					/>
					<HomeStack.Screen
						name="LIT Level 1 Testing"
						options={{ title: "Sign-Up" }}
						component={LIT_Lvl1_Testing}
					/>
					<HomeStack.Screen
						name="LIT Level 2"
						options={{ title: "Level 2" }}
						component={LIT_Lvl2_Nav}
					/>
					<HomeStack.Screen
						name="LIT Level 2 Curriculum"
						options={{ title: "LVL 2 Videos" }}
						component={LIT_Lvl2_Player}
					/>
					<HomeStack.Screen
						name="LIT Level 2 Testing"
						options={{ title: "Sign-Up" }}
						component={LIT_Lvl2_Testing}
					/>
					<HomeStack.Screen
						name="LIT Level 3"
						options={{ title: "Level 3" }}
						component={LIT_Lvl3_Nav}
					/>
					<HomeStack.Screen
						name="LIT Level 3 Curriculum"
						options={{ title: "LVL 3 Videos" }}
						component={LIT_Lvl3_Player}
					/>
					<HomeStack.Screen
						name="LIT Level 3 Testing"
						options={{ title: "Sign-Up" }}
						component={LIT_Lvl3_Testing}
					/>
					<HomeStack.Screen
						name="LIT Black Belt"
						options={{ title: "Black Belt" }}
						component={LIT_BB_Nav}
					/>
					<HomeStack.Screen
						name="LIT BB Curriculum"
						options={{ title: "Black Belt Videos" }}
						component={LIT_BB_Player}
					/>
					<HomeStack.Screen name="HiddenWebview" component={LIT_SideKick} />
					<HomeStack.Screen
						name="LIT Exclusive"
						options={{ title: "Exclusive Weapons" }}
						component={LIT_Exclusive_Nav}
					/>
				</HomeStack.Group>
			)}

			{/* All Students */}
			<HomeStack.Screen
				name="Intent-To-Promote"
				options={{ headerStyle: { backgroundColor: COLORS.lakewoodBlue } }}
				component={Itp}
			/>
			<HomeStack.Screen
				name="Level 1 Manual"
				options={{ headerStyle: { backgroundColor: COLORS.lakewoodBlue } }}
				component={Lvl1_Manual}
			/>
			<HomeStack.Screen
				name="Level 1 Standards"
				options={{ headerStyle: { backgroundColor: COLORS.lakewoodBlue } }}
				component={Level1Standards}
			/>
			<HomeStack.Screen
				name="Level 1 Checklist"
				options={{ headerStyle: { backgroundColor: COLORS.lakewoodBlue } }}
				component={Level1Checklist}
			/>
			<HomeStack.Screen
				name="Level 1 Sparring Gear"
				options={{ headerStyle: { backgroundColor: COLORS.lakewoodBlue } }}
				component={Level1Spar}
			/>
			<HomeStack.Screen
				name="Karate Homework Card"
				options={{ headerStyle: { backgroundColor: COLORS.lakewoodBlue } }}
				component={KarateHomeWork}
			/>
			<HomeStack.Screen
				name="Level 2 Manual"
				options={{ headerStyle: { backgroundColor: COLORS.littletonBlue } }}
				component={Level2Manual}
			/>
			<HomeStack.Screen
				name="Level 2 Standards"
				options={{ headerStyle: { backgroundColor: COLORS.littletonBlue } }}
				component={Level2Standards}
			/>
			<HomeStack.Screen
				name="Level 2 Checklist"
				options={{ headerStyle: { backgroundColor: COLORS.littletonBlue } }}
				component={Level2Checklist}
			/>
			<HomeStack.Screen
				name="Level 2 Sparring Gear"
				options={{ headerStyle: { backgroundColor: COLORS.littletonBlue } }}
				component={Level2Spar}
			/>
			<HomeStack.Screen
				name="Level 3 Manual"
				options={{ headerStyle: { backgroundColor: COLORS.lakewoodBlue } }}
				component={Level3Manual}
			/>
			<HomeStack.Screen
				name="Level 3 Standards"
				options={{ headerStyle: { backgroundColor: COLORS.lakewoodBlue } }}
				component={Level3Standards}
			/>
			<HomeStack.Screen
				name="Level 3 Checklist"
				options={{ headerStyle: { backgroundColor: COLORS.lakewoodBlue } }}
				component={Level3Checklist}
			/>
			<HomeStack.Screen
				name="Testing Sign-Up"
				options={{ headerStyle: { backgroundColor: COLORS.littletonBlue } }}
				component={BBTesting}
			/>
			<HomeStack.Screen
				name="SWAT 1"
				options={{ headerStyle: { backgroundColor: COLORS.littletonBlue } }}
				component={Swat1}
			/>
			<HomeStack.Screen
				name="EMA Pass Navigator"
				options={{ headerShown: false }}
				component={PassNavigator}
			/>
			<HomeStack.Screen
				name="Paywall Screen"
				options={{
					headerStyle: {
						backgroundColor: "#79B779",
					},
				}}
				component={PaywallScreen}
			/>
		</HomeStack.Navigator>
	);
};

export default HomeStack_Nav;
