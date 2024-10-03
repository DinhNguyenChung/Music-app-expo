import React from "react";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { Stack } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <RootNavigation />
      <ExpoStatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const RootNavigation = () => {
  return (
    <Stack initialRouteName="launch">
      <Stack.Screen
        name="launch"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="launchPremium"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="premium"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="registerPassword"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};
