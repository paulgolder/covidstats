import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ListScreen from "../screens/ListScreen";
import DetailedStatsScreen from "../screens/DetailedStatsScreen";

const Stack = createNativeStackNavigator();

const BaseNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{ headerShown: true, title: "Search" }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailedStatsScreen}
          options={{ headerShown: true, title: "Detailed Stats" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BaseNavigation;
