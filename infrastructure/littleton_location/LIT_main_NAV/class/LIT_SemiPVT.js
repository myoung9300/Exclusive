import React from "react";
import { WebView } from "react-native-webview";
import { COLORS } from "../../../all_Students/Styles";

const LIT_SemiPVT = () => {
	return (
		<WebView
			style={{ flex: 1, backgroundColor: COLORS.littletonBlue }}
			pullToRefreshEnabled
			source={{
				uri: "https://www.signupgenius.com/go/9040848a8aa23a1ff2-exclusive#/",
			}}
		/>
	);
};

export default LIT_SemiPVT;
