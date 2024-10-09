import { colors, fontSize } from "@/constants/Colors";
import { unknownTrackImageUri } from "@/constants/image";
import { defaultStyles, utilsStyles } from "@/styles";
import { Entypo } from "@expo/vector-icons";
import { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { Text } from "react-native";
import { Image, StyleSheet, View } from "react-native";
import { TouchableHighlight } from "react-native";
import { useAudio } from "./AudioContext";
import { useTrackContext } from "./TracksContext";
import { useEffect } from "react";

export type TracksListItemProps = {
  track: {
    title: string;
    image?: string;
    artist?: string;
    url?: string;
  };
  //PlayerSCreen
  tracks: any[]; // Truyền danh sách bài hát vào props
  index: number; // Thêm index vào props
  // của TracksListItem
  onTrackSelect: (track: TracksListItemProps["track"]) => void; // Callback để chọn track
};
type RootStackParamList = {
  PlayerScreen: {
    track: { title: string; image?: string; artist?: string; url: string };
    playlist: any; // Add the playlist property
    currentTrackIndex: number; // Thêm currentTrackIndex
  };
};
const TracksListItem = ({
  track,
  onTrackSelect,
  tracks,
  index,
}: TracksListItemProps) => {
  const {
    selectedTrack,
    handleTrackSelect,
    currentTrackIndex,
    setCurrentTrackIndex,
  } = useTrackContext(); // Gọi Hook ở đây
  const isActive = false;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { play } = useAudio(); // Sử dụng AudioContext
  const handlePress = async () => {
    if (play && track.url) {
      onTrackSelect(track); // Chọn track khi nhấn
      play(track.url); // Phát bài hát khi nhấn
      handleTrackSelect(track, tracks); // Chọn track và cập nhật playlist
      console.log("Index selected in ListItem:", index);
      const newIndex = index;
      setCurrentTrackIndex(newIndex); // Cập nhật chỉ số bài hát
      // Log ngay sau khi gọi setCurrentTrackIndex
      console.log("CurrentTrackIndex set to:", newIndex);
    } else {
      console.error("Audio context is not available or track URL is invalid.");
    }
  };
  return (
    <>
      <TouchableHighlight onPress={() => handlePress()}>
        {/* Khi nhấn sẽ gọi hàm onTrackSelect */}
        <View
          style={{
            //   ...utilsStyles.centeredRow,
            ...styles.trackItemContainer,
          }}
        >
          <View>
            <Image
              source={{
                uri: track.image ?? unknownTrackImageUri,
              }}
              style={{
                ...styles.trackArtwordImage,
                opacity: isActive ? 0.6 : 1,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Title + Artist  */}
            <View style={{ width: "100%" }}>
              <Text
                numberOfLines={1}
                style={{
                  ...styles.trackTitleText,
                  color: isActive ? colors.primary : colors.text,
                }}
              >
                {track.title}
              </Text>
              {track.artist && (
                <Text
                  numberOfLines={1}
                  style={{
                    ...styles.trackArtistText,
                  }}
                >
                  {track.artist}
                </Text>
              )}
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "25%",
                }}
              >
                <Text style={{ ...styles.trackArtistTextViewandTime }}>
                  2,1M
                </Text>
                <Text style={{ ...styles.trackArtistTextViewandTime }}>
                  3:45
                </Text>
              </View>
            </View>
            <Entypo name="dots-three-horizontal" size={18} color={"gray"} />
          </View>
        </View>
      </TouchableHighlight>
    </>
  );
};
export default TracksListItem;

const styles = StyleSheet.create({
  trackItemContainer: {
    flexDirection: "row",
    columnGap: 14,
    alignItems: "center",
    paddingRight: 20,
    marginBottom: 10,
  },
  trackArtwordImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    // marginRight: 10
  },
  trackTitleText: {
    ...defaultStyles.text,
    fontSize: fontSize.sm,
    fontWeight: "600",
    maxWidth: "90%",
  },
  trackArtistText: {
    ...defaultStyles.text,
    color: colors.textMuted,
    fontSize: 14,
    marginTop: 4,
  },
  trackArtistTextViewandTime: {
    ...defaultStyles.text,
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 4,
  },
});
