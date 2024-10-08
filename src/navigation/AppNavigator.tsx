import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useColorScheme } from "react-native";
import {
  WelcomeScreen,
  LoginScreen,
  SignUpScreen,
  CreateHabitScreen,
  SubmitProofScreen,
  HabitSummaryScreen,
  SettingsScreen,
} from "../screens";

import { StatusBar } from "expo-status-bar";
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from "react-native-paper";
import { HomeNavigator } from "./HomeNavigator";
import { customColors } from "../../App";

type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  CreateHabit: undefined;
  SubmitProof: undefined;
  HabitSummary: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
);

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Main"
      component={HomeNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="CreateHabit" component={CreateHabitScreen} />
    <Stack.Screen name="SubmitProof" component={SubmitProofScreen} />
    <Stack.Screen name="HabitSummary" component={HabitSummaryScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
  </Stack.Navigator>
);
const AppStack = () => {
  const isAuthenticated = true; // Replace with actual auth check

  return <>{isAuthenticated ? <MainStack /> : <AuthStack />}</>;
};

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme();
  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });

  const CombinedDefaultTheme = {
    ...MD3LightTheme,
    ...LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      ...LightTheme.colors,
    },
  };
  const CombinedDarkTheme = {
    ...MD3DarkTheme,
    ...DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      ...DarkTheme.colors,
      ...customColors,
    },
  };

  return (
    <NavigationContainer
      // theme={colorScheme === "dark" ? CombinedDarkTheme : CombinedDefaultTheme}
      theme={CombinedDarkTheme}
      {...props}
    >
      <StatusBar backgroundColor={customColors.background} />
      <AppStack />
    </NavigationContainer>
  );
};
