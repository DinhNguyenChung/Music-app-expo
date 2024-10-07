import { colors, fontSize } from "@/constants/Colors";
import { defaultStyles } from "@/styles";
import { useRouter } from "expo-router";
import { useEffect, useReducer } from "react";
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Button } from "react-native-elements";

const loginScreen = () => {
  const router = useRouter();
  return (
    <View
      style={{ flex: 1, justifyContent: "space-between", alignItems: "center" }}
    >
      <ImageBackground
        source={require("../../assets/LaunchScreen/LauchScreen.png")}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />
      <Image
        source={require("../../assets/LaunchScreen/IconLoading.png")}
        style={{ marginTop: 100 }}
      />
      <View style={{ width: 250, paddingTop: 100 }}>
        <Text
          style={{
            fontSize: 50,
            color: "white",
            fontWeight: "bold",
            alignSelf: "center",
          }}
        >
          Your Music Your artists
        </Text>
      </View>
      <View style={{ marginBottom: 50, gap: 20 }}>
        <Button
          title="Create an account"
          titleStyle={{ fontWeight: "bold", fontSize: 20, color: "white" }}
          buttonStyle={{
            backgroundColor: "black",
            width: 300,
            height: 50,
            borderRadius: 25,
          }}
          onPress={() => router.push("signup")}
        />
        <Button
          title="I already have an account"
          titleStyle={{ fontWeight: "bold", fontSize: 20, color: "#16C3D9" }}
          buttonStyle={{
            backgroundColor: "white",
            width: 300,
            height: 50,
            borderRadius: 25,
          }}
          onPress={() => router.push("login")}
        />
      </View>
    </View>
  );
};

export default loginScreen;
