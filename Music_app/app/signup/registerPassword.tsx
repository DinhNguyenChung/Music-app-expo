import { colors, fontSize } from "@/constants/Colors";
import { defaultStyles } from "@/styles";
import { useRouter } from "expo-router";
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Button, Input } from "react-native-elements";

const RegisterPassword = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ImageBackground
        source={require("../../assets/LaunchScreen/PremiumBG.png")}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />
      <View style={{ width: 280, paddingTop: 150 }}>
        <Text
          style={{
            fontSize: 50,
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Sign up to start listening
        </Text>
      </View>
      <View style={{ width: "80%", margin: "auto", gap: 20 }}>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
            Password
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Input
            placeholder="Enter your password"
            placeholderTextColor={"#BFC4C1"}
            inputStyle={{
              borderWidth: 1,
              borderRadius: 5,
              height: 50,
              padding: 10,
              borderColor: "white",
            }}
            containerStyle={{ width: "100%", marginBottom: -20 }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
            Re-enter your password
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Input
            placeholder="Re-enter your password"
            placeholderTextColor={"#BFC4C1"}
            inputStyle={{
              borderWidth: 1,
              borderRadius: 5,
              height: 50,
              padding: 10,
              borderColor: "white",
              color: "white",
            }}
            containerStyle={{ width: "100%" }}
          />
        </View>
        {/* <Text>Warning</Text> */}
        <View style={{ marginTop: -25 }}>
          <Button
            title={"Next"}
            titleStyle={{ fontWeight: "bold", fontSize: 20, color: "black" }}
            buttonStyle={{
              backgroundColor: "#3BE477",
              width: "100%",
              height: 50,
              borderRadius: 25,
            }}
            // onPress={() => router.push("(tabs)")}
            onPress={() => router.push("login")}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingBottom: 100,
        }}
      >
        <Text style={{ color: "white" }}>Already have an account?</Text>
        <TouchableOpacity onPress={() => router.push("login")}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {" "}
            Log in here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterPassword;
