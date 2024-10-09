import { colors, fontSize } from "@/constants/Colors";
import { defaultStyles } from "@/styles";
import { useRouter } from "expo-router";
import { useReducer } from "react";
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Button } from "react-native-elements";

/**
 * Màn hình launch Premium
 * @returns Chuyển sang trang chủ khi nhấn nút Start listening
 */

const launchPremium = () => {
  const router = useRouter();
  return (
    <View
      style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}
    >
      <ImageBackground
        source={require("../../assets/LaunchScreen/LauchScreenPremium.png")}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />
      <Image
        source={require("../../assets/LaunchScreen/IconLoading.png")}
        style={{ marginTop: 100 }}
      />
      <View style={{ width: 250, alignContent: "center" }}>
        <Text style={{ fontSize: 50, color: "white", fontWeight: "bold" }}>
          Welcome to Premium
        </Text>
      </View>
      <View style={{ marginBottom: 100, gap: 20 }}>
        <Button
          title="Start listening"
          titleStyle={{ fontWeight: "bold", fontSize: 20, color: "white" }}
          buttonStyle={{
            backgroundColor: "black",
            width: 300,
            height: 50,
            borderRadius: 25,
          }}
          onPress={() => router.push("/(tabs)/home")}
        />
      </View>
    </View>
  );
};

export default launchPremium;
