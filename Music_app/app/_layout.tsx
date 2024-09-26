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
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};
