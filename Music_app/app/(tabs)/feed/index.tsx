import { defaultStyles } from "@/styles";
import { SafeAreaView, Text, View } from "react-native";

const FeedScreen = () => {
  return (
    <SafeAreaView style={defaultStyles.container}>
      <Text style={defaultStyles.text}>Feed Screen</Text>
    </SafeAreaView>
  );
};

export default FeedScreen;
