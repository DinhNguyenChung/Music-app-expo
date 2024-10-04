import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useTrackContext } from "@/components/TracksContext";
import {
  AntDesign,
  Entypo,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

type PlayerScreenRouteProp = RouteProp<{ Player: { track: any } }, "Player">;

const PlayerScreen = () => {
  const route = useRoute<PlayerScreenRouteProp>();
  // const { track } = route.params;
  const { selectedTrack } = useTrackContext();
  const track = selectedTrack || route.params.track;
  const navigation = useNavigation();
  useEffect(() => {
    // Log track object for debugging
    console.log(
      "Track in PlayerScreen:",
      JSON.stringify(selectedTrack, null, 2)
    );
  }, [selectedTrack]);

  if (!track) {
    return <Text>No track selected</Text>;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            track?.artwork ||
            "https://images.unsplash.com/photo-1622386638685-6f5b0b6d8b9d",
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
                navigation.goBack();
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
              <Text style={styles.title}>{track.title || "Unknown Title"}</Text>
              <Text style={styles.artist}>
                {track.artist || "Unknown Artist"}
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
              <TouchableOpacity>
                <AntDesign
                  name="retweet"
                  size={24}
                  // color={repeatMode ? "cyan" : "white"}
                />
              </TouchableOpacity>
              <TouchableOpacity
              //  onPress={skipBackward}
              >
                <AntDesign name="stepbackward" size={34} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
              //  onPress={handlePlayPause}
              >
                <Ionicons
                  // name={isPlaying ? "pause-circle-sharp" : "play-circle-sharp"}
                  name="pause-circle-sharp"
                  size={100}
                  color="white"
                />
              </TouchableOpacity>
              <TouchableOpacity
              //  onPress={skipForward}
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
              style={{ flexDirection: "row", justifyContent: "space-between" }}
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