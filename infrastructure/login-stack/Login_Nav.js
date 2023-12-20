
import React from 'react';
import { View, Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './login_screens/SigninScreen';
import SignUp from './login_screens/SignUpScreen';
import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';
import ConfirmEmailScreen from './login_screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './login_screens/ForgotPasswordScreen';

export default function Login() {
	const Login = createNativeStackNavigator();
	return (
			<Login.Navigator>
				<Login.Screen name="Sign In" component={Signin} options={{headerShown: false}}/>
				<Login.Screen name="Sign In" component={Signin} options={{headerShown: false}}/>
				<Login.Screen name="Sign Up" component={SignUp} options={{headerShown: false}} />
				<Login.Screen name="Confirm Account" component={ConfirmEmailScreen} options={{headerShown: false}} />
				<Login.Screen name="Forgot Password" component={ForgotPasswordScreen} options={{headerShown: false}} />
				<Login.Screen name="Terms of Use" component={TermsOfUse} />
				<Login.Screen name="Privacy Policy" component={PrivacyPolicy} />
			</Login.Navigator>

	);
}
