import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { TopBar } from "../components/top-bar/top-bar-feature";

import MaterialCommunityIcon from "@expo/vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";
import BlankScreen from "../screens/BlankScreen";
import {
  DashboardScreen,
  DiscoverHabitsScreen,
  LeaderboardScreen,
  ProfileScreen,
} from "../screens";

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const Tab = createBottomTabNavigator();

/**
 * This is the main navigator with a bottom tab bar.
 * Each tab is a stack navigator with its own set of screens.
 *
 * More info: https://reactnavigation.org/docs/bottom-tab-navigator/
 */
export function HomeNavigator() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => <TopBar />,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          flexDirection: "row",
          justifyContent: "space-between",
          height: 70,
          borderTopWidth: 0,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarActiveTintColor: theme.colors.tertiary,
        tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "Dashboard":
              return <AntDesign name="checkcircle" size={size} color={color} />;
            case "Discover":
              return <AntDesign name="search1" size={size} color={color} />;
            case "Leaderboard":
              return (
                <MaterialIcons name="leaderboard" size={size} color={color} />
              );
            case "Profile":
              return <AntDesign name="user" size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Discover" component={DiscoverHabitsScreen} />
      <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
