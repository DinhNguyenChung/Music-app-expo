import { defaultStyles } from "@/styles";
import { SafeAreaView, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={defaultStyles.container}>
      <Text style={defaultStyles.text}>Home Screen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
