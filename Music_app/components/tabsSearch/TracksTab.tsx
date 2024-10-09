import { ScrollView, Text, View } from "react-native";
import TracksList from "../TracksList";
import { useTrackContext } from "../TracksContext";

export const TracksTab = ({ tracks }: { tracks: any[] }) => {
  // Gọi Hook ở cấp độ cao nhất
  const { handleTrackSelect } = useTrackContext();

  // Kiểm tra nếu handleTrackSelect không tồn tại
  if (!handleTrackSelect) {
    console.error("handleTrackSelect là null hoặc không xác định");
    return null; // Hoặc render UI dự phòng
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ paddingRight: 60 }}
      >
        {tracks.length === 0 ? (
          <Text>No tracks found</Text>
        ) : (
          <TracksList
            tracks={tracks}
            onTrackSelect={(selectedTrack) => {
              console.log("TrackList selected:", selectedTrack);
              handleTrackSelect(selectedTrack);
            }}
            scrollEnabled={false}
          />
        )}
      </ScrollView>
    </View>
  );
};
