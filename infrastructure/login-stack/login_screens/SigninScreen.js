import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  View,
  Alert,
  Image,
  Text,
  SafeAreaView,
  useWindowDimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

// import { Auth } from "aws-amplify";

import EMABlue from "../../../assets/images/EMABlue.png";
import loginStyle from "../LoginStyles";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import EmailButton from "../components/EmailButton";

const SignInScreen = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPress = async (data) => {
    // if (loading) {
    //   return;
    // }
    // setLoading(true);
    // try {
    //   const response = await Auth.signIn(data.username, data.password);
    //   navigation.navigate("Tab");
    // } catch (e) {
    //   Alert.alert("Oops", e.message);
    // }
    // setLoading(false);
  };
  const onForgotPasswordPress = () => {
    navigation.navigate("Forgot Password");
  };
  const onConfirmationPress = () => {
    navigation.navigate("Confirm Account");
  };
  const onSignUp = () => {
    navigation.navigate("Sign Up");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
           <SafeAreaView style={loginStyle.container}>
             <Image style={loginStyle.logo} source={EMABlue} />
            <View style={loginStyle.break} />
        <Text style={loginStyle.smallTitle}>Did you forget your username?</Text>
        <EmailButton />

        <View style={loginStyle.break} />
        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: "Username is required" }}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 4,
              message: "Password should be minumium 6 characters long",
            },
          }}
        />
        <CustomButton
          text={loading ? "Loading..." : "Sign In"}
          onPress={handleSubmit(onSignInPress)}
          type="BUTTON"
        />
        <View style={loginStyle.break} />
        <CustomButton
          text="FORGOT PASSWORD?"
          onPress={onForgotPasswordPress}
          type="TERTIARY"
        />
        <CustomButton
          text="CONFIRM YOUR ACCOUNT..."
          onPress={onConfirmationPress}
          type="THIRD"
        />
        <View style={loginStyle.break} />
        <CustomButton
          text="Don't Have An Account? Create One"
          onPress={onSignUp}
          type="TERTIARY"
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;
