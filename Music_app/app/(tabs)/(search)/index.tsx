import TracksList from "@/components/TracksList";
import { useNavigationSearch } from "@/hooks/useNavigationSearch";
import { defaultStyles, utilsStyles } from "@/styles";
import { useMemo, useState } from "react";
import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";
import library from "@/assets/data/library.json";
import { trackTitleFilter } from "@/helpers/filter";
import { screenPadding } from "@/constants/Colors";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { TracksTab } from "@/components/tabsSearch/TracksTab";
import { ArtistsTabs } from "@/components/tabsSearch/ArtistsTabs";
import { AlbumsTabs } from "@/components/tabsSearch/AlbumsTabs";

const AllTab = ({ tracks }: { tracks: any[] }) => (
  <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    // style={{ paddingHorizontal: screenPadding.horizontal }}
    style={{ paddingRight: 60 }}
  >
    <TracksList tracks={tracks} scrollEnabled={false} />
  </ScrollView>
);
const TracksTabs = () => (
  // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //   <Text>Tracks</Text>
  // </View>
  <TracksTab />
);

const AlbumsTab = () => <AlbumsTabs />;

const ArtistsTab = () => <ArtistsTabs />;

const SearchScreen = () => {
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
    tracks: TracksTabs,
    albums: AlbumsTab,
    artists: ArtistsTab,
  });
  return (
    <SafeAreaView style={defaultStyles.container}>
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ paddingHorizontal: screenPadding.horizontal }}
      >
        <TracksList tracks={filteredSongs} scrollEnabled={false} />
      </ScrollView> */}
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
