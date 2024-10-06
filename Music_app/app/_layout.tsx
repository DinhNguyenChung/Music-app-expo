import React from "react";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { Stack } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TrackProvider } from "@/components/TracksContext";
import { AudioProvider } from "@/components/AudioContext";

export default function RootLayout() {
  return (
    <AudioProvider>
      <TrackProvider>
        <RootNavigation />
        <ExpoStatusBar style="auto" />
      </TrackProvider>
    </AudioProvider>
  );
}

const RootNavigation = () => {
  return (
    <Stack initialRouteName="launch">
      <Stack.Screen
        name="(launch)"
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
      <Stack.Screen
        name="PlayerScreen"
        options={{
          headerShown: false,
          gestureEnabled: true, // Cho phép vuốt để quay lại
          // presentation: "modal", // Sử dụng chế độ modal để tự động có hiệu ứng trượt từ dưới lên
          animation: "slide_from_bottom", // Sử dụng animation mặc định để trượt từ dưới lên
        }}
      />
    </Stack>
  );
};
