import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { useForm } from "react-hook-form";

// import { Auth } from "aws-amplify";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import EMABlue from "../../../assets/images/EMABlue.png";
import loginStyle from "../LoginStyles";

const ForgotPasswordScreen = ({ navigation }) => {
  const onSendPressed = async (data) => {
    // try {
    //   await Auth.forgotPassword(data.username);
    //   Alert.alert("Success", "Code was sent to your email");
    //   navigation.navigate("New Password");
    // } catch (e) {
    //   Alert.alert("Oops", e.message);
    // }
  };
  const onSignInPressed = () => {
    navigation.navigate("Sign In");
  };

  const { control, handleSubmit } = useForm();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={loginStyle.container}>
      <Image style={loginStyle.logo} source={EMABlue} />
        <View style={loginStyle.break} />
        <Text style={loginStyle.title}>Reset your Password</Text>
        <View style={loginStyle.break} />
        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: "Username is required" }}
        />
        <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} type="BUTTON" />
        <View style={loginStyle.break} />
        <CustomButton
          text="Back to Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPasswordScreen;
