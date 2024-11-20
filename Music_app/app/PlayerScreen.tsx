import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { TrackProvider, useTrackContext } from "@/components/TracksContext";
import {
  AntDesign,
  Entypo,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useAudio } from "@/components/AudioContext";
import { unknownTrackImageUri } from "@/constants/image";
import { useRouter, useLocalSearchParams } from "expo-router";

// type PlayerScreenRouteProp = RouteProp<{ Player: { track: any } }, "Player">;
type PlayerScreenRouteProp = RouteProp<
  { Player: { track: any; playlist?: any[]; currentTrackIndex: number } },
  "Player"
>;

const PlayerScreen = () => {
  // const router = useRoute<PlayerScreenRouteProp>();
  const router = useRouter();
  const { trackId, playlist } = useLocalSearchParams(); // Lấy trackId và playlist từ query string
  const [repeatMode, setRepeatMode] = useState(false);
  const {
    selectedTrack,
    currentTrackIndex,
    setCurrentTrackIndex,
    // playlist,
    playlist: contextPlaylist,
    skipForward,
    skipBackward,
  } = useTrackContext();
  // const { track = {}, playlist: playlistString = [] } =
  //   playlist || route.params;
  const parsedPlaylist =
    typeof playlist === "string"
      ? JSON.parse(decodeURIComponent(playlist))
      : [];
  useEffect(() => {
    // Cập nhật bài hát được chọn dựa trên trackId
    if (trackId) {
      const index = parsedPlaylist.findIndex(
        (track: any) => track.id === trackId
      );
      if (index !== -1) {
        setCurrentTrackIndex(index);
      }
    }
  }, [trackId, parsedPlaylist, setCurrentTrackIndex]);
  // const { track, playlist = [], currentTrackIndex } = route.params;
  const { play, pause, stop, sound, isPlaying, setIsPlaying } = useAudio(); // Gọi Hook ở đây
  useEffect(() => {
    console.log("Router:", router);
    console.log("Params:", trackId, playlist);
  }, [router, trackId, playlist]);

  useEffect(() => {
    // Logic để phát nhạc nếu cần thiết
    if (selectedTrack) {
      console.log(`Playing: ${selectedTrack.title}`);
      // Bắt đầu phát nhạc từ URL
    }
  }, [selectedTrack]);
  // Toggle chế độ lặp lại
  const toggleRepeat = () => {
    setRepeatMode(!repeatMode);
  };

  useEffect(() => {
    console.log("Current Track Index:", currentTrackIndex);
    console.log("PlaylistLenght:", playlist.length);
    console.log("Selected Track:", selectedTrack);
    // console.log("Track:", track);
  }, [currentTrackIndex, playlist, selectedTrack]);

  useEffect(() => {
    // Log track object for debugging
    console.log(
      "Track in PlayerScreen:",
      JSON.stringify(selectedTrack, null, 2)
    );
  }, [selectedTrack]);

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
  // useEffect(() => {
  //   console.log("Route params:", route.params);
  // }, [route.params]);
  // useEffect(() => {
  //   console.log("Current Track Index has been updated:", currentTrackIndex);
  // }, [currentTrackIndex]);

  return (
    <TrackProvider>
      <View style={styles.container}>
        <ImageBackground
          // source={{
          //   uri:
          //     selectedTrack?.artwork ||
          //     (playlist.length > 0 && playlist[currentTrackIndex]?.artwork) ||
          //     track?.artwork ||
          //     unknownTrackImageUri,
          // }}
          source={{
            uri:
              selectedTrack?.artwork ||
              contextPlaylist[currentTrackIndex]?.artwork ||
              unknownTrackImageUri,
          }}
          style={styles.backgroundImage}
        >
          <View style={{ height: "13%" }}>
            <View style={styles.headerStyles}>
              <TouchableOpacity>
                <Text style={{ color: "white" }}>Play</Text>
              </TouchableOpacity>
              <TouchableOpacity
                // Quay về màn hình trước đó
                onPress={() => {
                  // navigation.goBack();
                  router.back();
                }}
              >
                <AntDesign name="down" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              backgroundColor: "rgba(0,0,0,0.5)",
              height: "45%",
              padding: 20,
            }}
          >
            <View>
              <View>
                {/* <Text style={styles.title}>
                  {selectedTrack?.title ||
                    (playlist && playlist[currentTrackIndex]?.title) ||
                    selectedTrack?.title ||
                    "Unknown Title"}
                </Text> */}
                <Text style={styles.title}>
                  {selectedTrack?.title || "Unknown Title"}
                </Text>
                {/* <Text style={styles.artist}>
                  {selectedTrack?.artist ||
                    (playlist && playlist[currentTrackIndex]?.artist) ||
                    selectedTrack?.artist ||
                    "Unknown Artist"}
                </Text> */}
                <Text style={styles.artist}>
                  {selectedTrack?.artist || "Unknown Artist"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <MaterialIcons name="multitrack-audio" size={96} color="white" /> */}
                <Image
                  source={require("../pic/YourMusic/image-removebg-preview.png")}
                  style={{
                    width: 376,
                    height: 66,
                    transform: [
                      { scaleY: 1.07 }, // Tương tự như CATransform3D affine transform trong Swift
                      { translateY: -2 }, // Chuyển ảnh lên trên một chút (ty: -0.04)
                    ],
                    // backgroundColor: "rgba(0,0,0,0.2)",
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity onPress={toggleRepeat}>
                  <AntDesign
                    name="retweet"
                    size={24}
                    color={repeatMode ? "cyan" : "white"}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={
                    // () => handleSkip("previous")
                    skipBackward
                  }
                >
                  <AntDesign name="stepbackward" size={34} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePlayPause}>
                  <Ionicons
                    name={
                      isPlaying ? "pause-circle-sharp" : "play-circle-sharp"
                    }
                    // name="pause-circle-sharp"
                    size={100}
                    color="white"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={
                    // () => handleSkip("next")
                    skipForward
                  }
                >
                  <AntDesign name="stepforward" size={34} color="white" />
                </TouchableOpacity>
                <Entypo name="dots-three-horizontal" size={24} color="white" />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity style={styles.styleHeatandCommet}>
                  <AntDesign name="hearto" size={15} color="white" />
                  <Text style={styles.titlemini}>12K</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.styleHeatandCommet}>
                  <MaterialIcons name="chat" size={24} color="white" />
                  <Text style={styles.titlemini}>450</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Feather name="upload" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TrackProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  headerStyles: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "white",
  },
  artist: {
    fontSize: 16,
    color: "white",
    paddingBottom: 10,
  },
  titlemini: {
    fontSize: 12,
    color: "white",
  },
  styleHeatandCommet: {
    flexDirection: "row",
    paddingLeft: 5,
    paddingRight: 5,
    width: 50,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
});

export default PlayerScreen;
