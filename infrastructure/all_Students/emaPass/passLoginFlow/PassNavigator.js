/* eslint-disable no-unused-vars */
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EmaPassHome from "../PassHomeScreen";
import UserInfo from "./UserInfo";

import Lvl1Breakdown from "../Lvl1Breakdown";
import Lvl2Breakdown from "../Lvl2Breakdown";
import Lvl3Breakdown from "../Lvl3Breakdown";
import EmaPassMon2 from "../Mon2Breakdown";
import EmaPassChonJi from "../EmaPass.youtube/EmaPass.Chonji";
import EmaPassTanGun from "../EmaPass.youtube/EmaPass.TanGun";
import EmaPassToSan from "../EmaPass.youtube/EmaPass.ToSan";
import EmaPassWonHyo from "../EmaPass.youtube/EmaPass.WonHyo";
import EmaPassYulGok from "../EmaPass.youtube/EmaPass.YulGok";
import EmaPassChungGun from "../EmaPass.youtube/EmaPass.ChungGun";
import EmaPassToiGye from "../EmaPass.youtube/EmaPass.ToiGye";
import EmaPassHwaRang from "../EmaPass.youtube/EmaPass.HwaRang";
import EmaPassPoEun from "../EmaPass.youtube/EmaPass.PoEun";
import EmaPassGyeBek from "../EmaPass.youtube/EmaPass.GyeBek";
import EmaPassExodus from "../EmaPass.youtube/EmaPass.Exodus";
import EmaPassChungMu from "../EmaPass.youtube/EmaPass.ChungMu";

const PassNavigator = () => {
	const Pass = createNativeStackNavigator();

	return (
		<Pass.Navigator
			screenOptions={{
				headerTitleStyle: { fontSize: 20, fontFamily: "Nunito_800ExtraBold" },
				headerTintColor: "white",
				headerStyle: {
					backgroundColor: "#79B779",
				},
			}}
		>
			<Pass.Screen name="EMA Pass" component={EmaPassHome} />
			<Pass.Screen
				name="Level 1 Breakdowns"
				options={{ headerBackTitleVisible: false }}
				component={Lvl1Breakdown}
			/>
			<Pass.Screen
				name="Level 2 Breakdowns"
				options={{ headerBackTitleVisible: false }}
				component={Lvl2Breakdown}
			/>
			<Pass.Screen
				name="Level 3 Breakdowns"
				options={{ headerBackTitleVisible: false }}
				component={Lvl3Breakdown}
			/>
			<Pass.Screen
				name="Month 2 Breakdowns"
				options={{ headerBackTitleVisible: false }}
				component={EmaPassMon2}
			/>
			<Pass.Screen
				name="Ema Pass Chon Ji"
				options={{ headerBackTitleVisible: false }}
				component={EmaPassChonJi}
			/>
			<Pass.Screen
				name="Ema Pass Tan Gun"
				options={{ headerBackTitleVisible: false }}
				component={EmaPassTanGun}
			/>
			<Pass.Screen
				name="Ema Pass To San"
				options={{ headerBackTitleVisible: false }}
				component={EmaPassToSan}
			/>
			<Pass.Screen
				name="Ema Pass Won Hyo"
				options={{ headerBackTitleVisible: false }}
				component={EmaPassWonHyo}
			/>
			<Pass.Screen
				name="Ema Pass Yul Gok"
				options={{ headerBackTitleVisible: false }}
				component={EmaPassYulGok}
			/>
			<Pass.Screen
				name="Ema Pass Chung Gun"
				options={{ headerBackTitleVisible: false }}
				component={EmaPassChungGun}
			/>
			<Pass.Screen
				name="Ema Pass Toi Gye"
				options={{ headerBackTitleVisible: false }}
				component={EmaPassToiGye}
			/>
			<Pass.Screen
				name="Ema Pass Hwa Rang"
				options={{ headerBackTitleVisible: false }}
				component={EmaPassHwaRang}
			/>
			<Pass.Screen
				name="Ema Pass Po Eun"
				options={{ headerBackTitleVisible: false }}
				component={EmaPassPoEun}
			/>
			<Pass.Screen
				name="Ema Pass Gye Bek"
				options={{ headerBackTitleVisible: false }}
				component={EmaPassGyeBek}
			/>
			<Pass.Screen
				name="Ema Pass Exodus"
				options={{ headerBackTitleVisible: false }}
				component={EmaPassExodus}
			/>
			<Pass.Screen
				name="Ema Pass Chung Mu"
				options={{ headerBackTitleVisible: false }}
				component={EmaPassChungMu}
			/>
			<Pass.Screen
				name="User Information"
				options={{ headerBackTitleVisible: false }}
				component={UserInfo}
			/>
		</Pass.Navigator>
	);
};

export default PassNavigator;
