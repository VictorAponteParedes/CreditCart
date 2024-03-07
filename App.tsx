import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, Oswald_300Light } from "@expo-google-fonts/oswald";
import { Home } from "./src/screens/home/Home";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const [oswaldLoaded] = useFonts({
    Oswald_300Light,
  });

  if (!oswaldLoaded) {
    return null;
  }
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
