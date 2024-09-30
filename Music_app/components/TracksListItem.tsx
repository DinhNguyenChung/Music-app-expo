import { colors, fontSize } from "@/constants/Colors";
import { unknownTrackImageUri } from "@/constants/image";
import { defaultStyles, utilsStyles } from "@/styles";
import { Entypo } from "@expo/vector-icons";
import { Text } from "react-native";
import { Image, StyleSheet, View } from "react-native";
import { TouchableHighlight } from "react-native";
// import { Track, useActiveTrack } from "react-native-track-player";

export type TracksListItemProps = {
  track: {
    title: string;
    image?: string;
    artist?: string;
  };
  // track: Track;
};

const TracksListItem = ({ track }: TracksListItemProps) => {
  const isActive = false;
  return (
    <TouchableHighlight>
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
        <View>
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
          </View>
          <Entypo name="dots-three-horizontal" size={18} color={colors.icon} />
        </View>
      </View>
    </TouchableHighlight>
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
});
