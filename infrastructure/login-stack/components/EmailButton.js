import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

import email from "react-native-email";
import loginStyle from "../LoginStyles";

const EmailButton = () => {
  const handleEmail = () => {
    email(["exclusivemartialarts@gmail.com"], {
      subject: "Username request",
      body: "Please send me my user name for EMA2.0.",
    }).catch(console.error);
  };
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={handleEmail}
        style={{borderRadius: 10 }}
      >
        <Text
          style={[loginStyle.signOut, { color: "#D3D3D3", paddingHorizontal: 20 }]}
        >
          EMAIL US
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EmailButton;
