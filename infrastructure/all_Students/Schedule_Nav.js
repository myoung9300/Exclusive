import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../all_Students/Styles";
import { useLocation } from "../../location_stack/components/LocationContext";

import LKW_Schedule_HomeScreen from "../lakewood_location/LKW_main_NAV/schedule/LKW_Schedule_HomeScreen";
import LKW_WeeklySchedule from "../lakewood_location/LKW_main_NAV/schedule/LKW_WeeklySchedule";
import LKW_Calendar from "../lakewood_location/LKW_main_NAV/schedule/LKW_Calendar";
import LIT_Schedule_Homescreen from "../littleton_location/LIT_main_NAV/schedule/LIT_Schedule_HomeScreen";
import LIT_WeeklySchedule from "../littleton_location/LIT_main_NAV/schedule/LIT_WeeklySchedule";
import LIT_Calendar from "../littleton_location/LIT_main_NAV/schedule/LIT_Calendar";

const Schedule = createNativeStackNavigator();

const Schedule_Nav = () => {
	const { selectedLocation } = useLocation();
	return (
		<Schedule.Navigator
			screenOptions={{
				headerTitleStyle: { fontSize: 20, fontFamily: "Nunito_800ExtraBold" },
				headerBackTitleVisible: false,
				headerTintColor: "white",
			}}
		>
			{selectedLocation === "Lakewood" && (
				<Schedule.Group
					screenOptions={{
						headerStyle: { backgroundColor: COLORS.lakewoodBlue },
					}}
				>
					<Schedule.Screen
						name="LKW Schedule Homescreen"
						options={{ headerShown: false }}
						component={LKW_Schedule_HomeScreen}
					/>
					<Schedule.Screen
						name="LKW Weekly Schedule"
						options={{ title: "Weekly Schedule" }}
						component={LKW_WeeklySchedule}
					/>
					<Schedule.Screen
						name="LKW Calendar"
						options={{ title: "Monthly Calendar" }}
						component={LKW_Calendar}
					/>
				</Schedule.Group>
			)}
			{selectedLocation === "Littleton" && (
				<Schedule.Group
					screenOptions={{
						headerStyle: { backgroundColor: COLORS.littletonBlue },
					}}
				>
					<Schedule.Screen
						name="LIT Schedule Homescreen"
						options={{ headerShown: false }}
						component={LIT_Schedule_Homescreen}
					/>
					<Schedule.Screen
						name="LIT Weekly Schedule"
						options={{ title: " Weekly Schedule" }}
						component={LIT_WeeklySchedule}
					/>
					<Schedule.Screen
						name="LIT Calendar"
						options={{ title: " Monthly Calendar" }}
						component={LIT_Calendar}
					/>
				</Schedule.Group>
			)}
		</Schedule.Navigator>
	);
};

export default Schedule_Nav;
