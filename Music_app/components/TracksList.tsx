import {
  FlatList,
  FlatListProps,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import library from "@/assets/data/library.json";
import TracksListItem from "./TracksListItem";
import { utilsStyles } from "@/styles";

export type Track = {
  title: string;
  artist: string;
  url: string;
  artwork?: string; // artwork is optional
};

export type TracksListProps = Partial<FlatListProps<any>> & {
  // tracks: any[];
  tracks: Track[];
  onTrackSelect: (track: any) => void;
};
const ItemDivider = () => (
  <View
    style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}
  />
);

const TracksList = ({
  tracks,
  onTrackSelect,
  ...flastListProps
}: TracksListProps) => {
  return (
    <View>
      <FlatList
        data={tracks}
        contentContainerStyle={{ paddingBottom: 128, paddingTop: 10 }}
        ListFooterComponent={ItemDivider}
        ItemSeparatorComponent={ItemDivider}
        renderItem={({ item: track, index }) => (
          <TouchableOpacity onPress={() => onTrackSelect(track)}>
            <TracksListItem
              track={{
                ...track,
                image: track.artwork,
              }}
              tracks={tracks}
              index={index}
              onTrackSelect={() => {
                onTrackSelect(track);
              }}
            />
          </TouchableOpacity>
        )}
        {...flastListProps}
      />
    </View>
  );
};

export default TracksList;
