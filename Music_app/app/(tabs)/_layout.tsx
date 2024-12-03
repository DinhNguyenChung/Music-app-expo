import { router, Tabs } from "expo-router";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { fontSize } from "@/constants/Colors";
import { BlurView } from "expo-blur";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
// Dummy play function for demonstration purposes

import { useTrackContext } from "@/components/TracksContext";
import { useAudio } from "@/components/AudioContext";
import library from "@/assets/data/library.json";
import { unknownTrackImageUri } from "@/constants/image";

const TabsNavigation = () => {
  const { play, pause, stop, isPlaying, setIsPlaying } = useAudio(); // Gọi Hook ở đây
  const { selectedTrack, handleTrackSelect, playlist, currentTrackIndex } =
    useTrackContext(); // Gọi Hook ở đây

  const handlePlayPause = () => {
    if (isPlaying) {
      pause(); // Dừng phát
    } else {
      const urlToPlay =
        selectedTrack && selectedTrack.url ? selectedTrack.url : null;
      if (urlToPlay) {
        play(urlToPlay); // Phát bài hát
      } else {
        console.error("No valid URL to play.");
      }
    }
    setIsPlaying(!isPlaying); // Cập nhật trạng thái phát/dừng
  };
  useEffect(() => {
    console.log("CurrentTrackIndex in TabNavigation 1:", currentTrackIndex);
  }, [currentTrackIndex]);
  useEffect(() => {
    console.log("Selected track:", selectedTrack);
  }, [selectedTrack]);
  useEffect(() => {
    // handleTrackSelect(selectedTrack, playlist); // Đảm bảo library không trống
    // console.log("Library:", library);
    console.log("Playlist Tabnavigation:", playlist.length);
  }, [playlist]);
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
              paddingTop: 8,
            },
            tabBarBackground: () => (
              <BlurView
                intensity={95}
                style={{
                  ...StyleSheet.absoluteFillObject,
                  overflow: "hidden",
                  backgroundColor: "transparent",
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
              headerTitleAlign: "left",
              headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
              headerShown: true,
              // headerTransparent: true,
              headerRight: () => (
                <MaterialCommunityIcons
                  name="cast-connected"
                  size={24}
                  color="black"
                  style={{ padding: 10 }}
                />
              ),
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
            borderTopWidth: 1,
          }}
          onPress={() => {
            if (selectedTrack) {
              // router.push({
              //   pathname: "/PlayerScreen",
              //   params: {
              //     track: selectedTrack,
              //     playlist: library.map((track) => track.url),
              //   },
              // });
              router.push(
                `/PlayerScreen?trackId=${
                  selectedTrack.id
                }&playlist=${encodeURIComponent(JSON.stringify(library))}`
              );
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
                    source={{
                      uri: selectedTrack.artwork || unknownTrackImageUri,
                    }}
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
              <TouchableOpacity onPress={handlePlayPause}>
                <MaterialCommunityIcons
                  name={
                    isPlaying ? "pause-circle-outline" : "play-circle-outline"
                  }
                  size={45}
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
