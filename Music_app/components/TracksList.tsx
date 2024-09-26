import { FlatList, FlatListProps } from "react-native";
import library from "@/assets/data/library.json";
import TracksListItem from "./TracksListItem";
export type TracksListProps = Partial<FlatListProps<any>>;

const TracksList = ({ ...flastListProps }: TracksListProps) => {
  return (
    <FlatList
      data={library}
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
