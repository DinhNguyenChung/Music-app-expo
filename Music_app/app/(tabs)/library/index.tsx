import { defaultStyles } from "@/styles";
import { SafeAreaView, Text, View } from "react-native";

const LibraryScreen = () => {
  return (
    <SafeAreaView style={defaultStyles.container}>
      <Text style={defaultStyles.text}>Library Screen</Text>
    </SafeAreaView>
  );
};

export default LibraryScreen;
