import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useForm } from "react-hook-form";
// import { Auth } from "aws-amplify";

import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

import EMABlue from "../../../assets/images/EMABlue.png";
import loginStyle from "../LoginStyles";

const ConfirmEmailScreen = ({ navigation }) => {
  const route = useRoute();
  const { control, handleSubmit, watch } = useForm({
    defaultValues: { username: route?.params?.username },
  });

  const username = watch("username");

  const onConfirmPressed = async (data) => {
    try {
    //   await Auth.confirmSignUp(data.username, data.code);
    navigation.navigate("Sign In");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };
  const onSignInPressed = () => {
    navigation.navigate("Sign In");
  };
  const onResendPressed = async () => {
    try {
      await Auth.resendSignUp(username);
      Alert.alert("Success", "Code was sent to your email");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={loginStyle.container}>
      <Image style={loginStyle.logo} source={EMABlue} />
      <View style={loginStyle.break} />
        <Text style={loginStyle.title}>Confirm Email</Text>
        <View style={loginStyle.break} />
        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: "Username is required" }}
        />
        <CustomInput
          name="code"
          placeholder="Enter your confirmation code"
          control={control}
          rules={{ required: "Confirmation code is required" }}
        />
        <View style={loginStyle.break} />
        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} type="BUTTON" />

        <CustomButton
          text="Resend code"
          onPress={onResendPressed}
          type="SECONDARY"
        />
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

export default ConfirmEmailScreen;
