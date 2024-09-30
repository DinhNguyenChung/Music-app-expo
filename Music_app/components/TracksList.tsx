import { FlatList, FlatListProps, View } from "react-native";
import library from "@/assets/data/library.json";
import TracksListItem from "./TracksListItem";
import { utilsStyles } from "@/styles";
export type TracksListProps = Partial<FlatListProps<any>> & {
  tracks: any[];
};
const ItemDivider = () => (
  <View
    style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}
  />
);

const TracksList = ({ tracks, ...flastListProps }: TracksListProps) => {
  return (
    <FlatList
      data={tracks}
      contentContainerStyle={{ paddingBottom: 128, paddingTop: 10 }}
      ListFooterComponent={ItemDivider}
      ItemSeparatorComponent={ItemDivider}
      renderItem={({ item: track }) => (
        <TracksListItem
          track={{
            ...track,
            image: track.artwork,
          }}
        />
      )}
      {...flastListProps}
    />
  );
};

export default TracksList;
