import { colors, fontSize } from "@/constants/Colors";
import { defaultStyles } from "@/styles";
import { useRouter, useLocalSearchParams } from "expo-router";
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from "react-native";
import { Button, Input } from "react-native-elements";
import { useState } from "react";
import axios from "axios";

const RegisterPassword = () => {
  const router = useRouter();
  const { email } = useLocalSearchParams(); // Lấy email từ query parameters

  console.log("Email từ register: ", email);

  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  // const handleNextPress = () => {
  //   if (!validatePasswords()) {
  //     return; // Dừng lại nếu mật khẩu không hợp lệ
  //   }
  //   // Điều hướng sang trang tiếp theo nếu mật khẩu hợp lệ
  //   router.push("/login");
  // };

  const validatePasswords = () => {
    // Kiểm tra độ dài mật khẩu và tính hợp lệ (ít nhất 6 ký tự ở ví dụ này)
    if (password.length < 6) {
      Alert.alert("Lỗi", "Mật khẩu phải có ít nhất 6 ký tự.");
      return false;
    }
    // Kiểm tra khớp giữa mật khẩu và xác nhận mật khẩu
    if (password !== repassword) {
      Alert.alert("Lỗi", "Mật khẩu và xác nhận mật khẩu không khớp.");
      return false;
    }
    return true;
  };
  function handleSubmit() {
    console.log("Đã bấm !");
    if (!validatePasswords()) return;
    const userData = {
      name: email,
      email,
      mobile: null,
      password,
    };
    axios
      .post("http://172.20.10.2:5001/register", userData, { timeout: 10000 })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "ok") {
          Alert.alert("Thành công", "Đăng ký thành công");
          router.push("/login");
        } else {
          // Alert.alert('Lỗi', JSON.stringify(res.data));
          Alert.alert("Lỗi", "Mail đã tồn tại");
          router.back();
        }
      })
      .catch((e) => console.log(e));
  }
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
              color: "white",
            }}
            containerStyle={{ width: "100%", marginBottom: -20 }}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
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
            onChangeText={(text) => setRepassword(text)}
            secureTextEntry
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
            onPress={handleSubmit}
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
        <TouchableOpacity onPress={() => router.push("/login")}>
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
