import { Tabs } from "expo-router";
import {
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { fontSize } from "@/constants/Colors";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

const TabsNavigation = () => {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "cyan",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: fontSize.xs,
          fontWeight: "500",
        },
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          paddingVertical: 8,
          // borderTopWidth: 1,
          // borderTopLeftRadius: 20,
          // borderTopRightRadius: 20,
          // borderLeftWidth: 1,
          // borderRightWidth: 1,
        },
        tabBarBackground: () => (
          <BlurView
            intensity={95}
            style={{
              ...StyleSheet.absoluteFillObject,
              overflow: "hidden",
              backgroundColor: "#fff",
              // borderTopLeftRadius: 20,
              // borderTopRightRadius: 20,
              // backgroundColor: "rgba(255,255,255,0.5)",
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(search)"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: "Feed",
          tabBarIcon: ({ color }) => (
            <Ionicons name="newspaper-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ color }) => (
            <Ionicons name="library-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
export default TabsNavigation;
