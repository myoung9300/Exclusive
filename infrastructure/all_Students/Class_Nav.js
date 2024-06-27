import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../all_Students/Styles";
import { useLocation } from "../../location_stack/components/LocationContext";

import InstructorCard from "../all_Students/InstructorCard";

import LKW_class_HomeScreen from "../lakewood_location/LKW_main_NAV/class/LKW_class_HomeScreen";
import LKW_Class_Signup from "../lakewood_location/LKW_main_NAV/class/LKW_Class_Signup";
import LKW_Instructor_PVT from "../lakewood_location/LKW_main_NAV/class/LKW_Instructor_PVT";
import LKW_SemiPVT from "../lakewood_location/LKW_main_NAV/class/LKW_SemiPVT";
import LIT_class_HomeScreen from "../littleton_location/LIT_main_NAV/class/LIT_class_HomeScreen";
import LIT_Class_Signup from "../littleton_location/LIT_main_NAV/class/LIT_Class_Signup";
import LIT_SemiPVT from "../littleton_location/LIT_main_NAV/class/LIT_SemiPVT";
import LIT_Instructor_PVT from "../littleton_location/LIT_main_NAV/class/LIT_Instructor_PVT";

const Class = createNativeStackNavigator();

const Class_Nav = () => {
	const { selectedLocation } = useLocation();
	return (
		<Class.Navigator
			screenOptions={{
				headerTitleStyle: { fontSize: 20, fontFamily: "Nunito_800ExtraBold" },
				headerBackTitleVisible: false,
				headerTintColor: "white",
			}}
		>
			{selectedLocation === "Lakewood" && (
				<Class.Group
					screenOptions={{
						headerStyle: { backgroundColor: COLORS.lakewoodBlue },
					}}
				>
					<Class.Screen
						name="LKW Class Homescreen"
						options={{ headerShown: false }}
						component={LKW_class_HomeScreen}
					/>
					<Class.Screen
						name="LKW Class Sign-Up"
						options={{ title: "Sign Up" }}
						component={LKW_Class_Signup}
					/>
					<Class.Screen
						name="LKW Instructor PVT"
						options={{ title: "Instructor Bios" }}
						component={LKW_Instructor_PVT}
					/>
					<Class.Screen
						name="LKW Semi PVT"
						options={{ title: "Semi-Private Lessons" }}
						component={LKW_SemiPVT}
					/>
					<Class.Screen
						name="Instructor Card"
						options={{ title: "" }}
						component={InstructorCard}
					/>
				</Class.Group>
			)}
			{selectedLocation === "Littleton" && (
				<Class.Group
					screenOptions={{
						headerStyle: { backgroundColor: COLORS.littletonBlue },
					}}
				>
					<Class.Screen
						name="LIT Class Homescreen"
						options={{ headerShown: false }}
						component={LIT_class_HomeScreen}
					/>
					<Class.Screen
						name="LIT Class Sign-Up"
						options={{ title: "Sign Up" }}
						component={LIT_Class_Signup}
					/>
					<Class.Screen
						name="LIT Instructor Bios"
						options={{ title: "Instructor Bios" }}
						component={LIT_Instructor_PVT}
					/>
					<Class.Screen
						name="LIT Semi PVT"
						options={{ title: "Semi-Private Lessons" }}
						component={LIT_SemiPVT}
					/>
					<Class.Screen
						name="Instructor Card"
						options={{ title: "" }}
						component={InstructorCard}
					/>
				</Class.Group>
			)}
		</Class.Navigator>
	);
};

export default Class_Nav;
