import { router, Tabs } from "expo-router";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { fontSize } from "@/constants/Colors";
import { BlurView } from "expo-blur";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect } from "react";
import { useTrackContext } from "@/components/TracksContext";

const TabsNavigation = () => {
  const { selectedTrack } = useTrackContext(); // Gọi Hook ở đây

  useEffect(() => {
    console.log("Selected track:", selectedTrack);
  }, [selectedTrack]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
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
            },
            tabBarBackground: () => (
              <BlurView
                intensity={95}
                style={{
                  ...StyleSheet.absoluteFillObject,
                  overflow: "hidden",
                  backgroundColor: "#fff",
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
      </View>
      {/* Thanh phát nhạc */}
      {selectedTrack ? (
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 80,
            left: 0,
            right: 0,
            padding: 20,
            backgroundColor: "#fff",
            borderColor: "#ccc",
            zIndex: 100,
          }}
          onPress={() => {
            if (selectedTrack) {
              router.push({
                pathname: "/PlayerScreen",
                params: { track: selectedTrack }, // Truyền track như tham số
              });
            }
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              {selectedTrack && (
                <>
                  <Image
                    source={{ uri: selectedTrack.artwork }}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 10,
                    }}
                  />
                  <View style={{ paddingLeft: 10 }}>
                    <Text>{selectedTrack.title}</Text>
                    <Text>{selectedTrack.artist}</Text>
                  </View>
                </>
              )}
            </View>
            <View>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="play-circle-outline"
                  size={40}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default TabsNavigation;
