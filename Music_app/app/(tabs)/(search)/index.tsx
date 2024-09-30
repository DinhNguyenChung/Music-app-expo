import TracksList from "@/components/TracksList";
import { useNavigationSearch } from "@/hooks/useNavigationSearch";
import { defaultStyles, utilsStyles } from "@/styles";
import { useMemo } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import library from "@/assets/data/library.json";
import { trackTitleFilter } from "@/helpers/filter";
import { screenPadding } from "@/constants/Colors";

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
  return (
    <SafeAreaView style={defaultStyles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ paddingHorizontal: screenPadding.horizontal }}
      >
        <TracksList tracks={filteredSongs} scrollEnabled={false} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
