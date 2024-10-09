import TracksList from "@/components/TracksList";
import { useNavigationSearch } from "@/hooks/useNavigationSearch";
import { defaultStyles, utilsStyles } from "@/styles";
import { useMemo, useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import library from "@/assets/data/library.json";
import { trackTitleFilter } from "@/helpers/filter";
import { screenPadding } from "@/constants/Colors";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { TracksTab } from "@/components/tabsSearch/TracksTab";
import { ArtistsTabs } from "@/components/tabsSearch/ArtistsTabs";
import { AlbumsTabs } from "@/components/tabsSearch/AlbumsTabs";
import { useTrackContext } from "@/components/TracksContext";

const AllTab = ({ tracks }: { tracks: any[] }) => {
  // Gọi Hook ở cấp độ cao nhất
  const { handleTrackSelect } = useTrackContext();

  // Kiểm tra nếu handleTrackSelect không tồn tại
  if (!handleTrackSelect) {
    console.error("handleTrackSelect là null hoặc không xác định");
    return null; // Hoặc render UI dự phòng
  }
  return (
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
            console.log("TrackList selected in Search SCreen:", selectedTrack);
            handleTrackSelect(selectedTrack, tracks);
          }}
          scrollEnabled={false}
        />
      )}
    </ScrollView>
  );
};
// const context = useTrackContext();
// console.log("Track context:", context);

const TracksTabs = ({ tracks }: { tracks: any[] }) => (
  <TracksTab tracks={tracks} />
);

const AlbumsTab = () => <AlbumsTabs />;

const ArtistsTab = () => <ArtistsTabs />;

const SearchScreen = ({
  onTrackSelect,
}: {
  onTrackSelect: (track: any) => void;
}) => {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: "Search songs",
    },
  });
  const filteredSongs = useMemo(() => {
    if (!search) return library;
    return library.filter(trackTitleFilter(search));
  }, [search]);

  // Quản lý trạng thái cho tab
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "all", title: "All" },
    { key: "tracks", title: "Tracks" },
    { key: "albums", title: "Albums" },
    { key: "artists", title: "Artists" },
  ]);

  const renderScene = SceneMap({
    all: () => <AllTab tracks={filteredSongs} />,
    tracks: () => <TracksTabs tracks={filteredSongs} />,
    albums: AlbumsTab,
    artists: ArtistsTab,
  });
  return (
    <SafeAreaView style={defaultStyles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get("window").width }}
        style={{ paddingHorizontal: 24 }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: "cyan", height: 3 }}
            style={{ backgroundColor: "white" }}
            labelStyle={{
              color: "gray",
              fontSize: 15,
              textTransform: "none",
              fontWeight: "600",
            }}
            activeColor={"cyan"}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;
