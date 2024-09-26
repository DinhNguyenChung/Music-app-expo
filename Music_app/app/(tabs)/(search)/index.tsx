import TracksList from "@/components/TracksList";
import { defaultStyles, utilsStyles } from "@/styles";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

const SearchScreen = () => {
  return (
    <SafeAreaView style={defaultStyles.container}>
      <ScrollView>
        <TracksList scrollEnabled={false} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;
