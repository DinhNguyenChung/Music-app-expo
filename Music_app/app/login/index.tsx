import { colors, fontSize } from "@/constants/Colors";
import { defaultStyles } from "@/styles";
import { useRouter } from "expo-router";
import { useReducer, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Button, Input } from "react-native-elements";

import { styles } from "./LoginStyle";
import axios from "axios";

/**
 * MÀN HÌNH ĐĂNG NHẬP dành cho người đã có tài khoản
 * @param Email - tài khoản người dùng
 * @param Password - mật khẩu người dùng
 * @returns Đăng nhập thành công sẽ chuyển vào trang chủ
 */

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    console.log(email, password);
    const userData = {
      email: email,
      password,
    };

    axios.post("http://172.20.10.2:5001/login-user", userData).then((res) => {
      console.log(res.data);
      if (res.data.status == "ok") {
        Alert.alert("Đăng nhập thành công");
        router.push("/(tabs)/home");
        // AsyncStorage.setItem('token', res.data.data);
        // AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
        // AsyncStorage.setItem('userType',res.data.userType)
        // navigation.navigate('Home');
        // if(res.data.userType=="Admin"){
        //    navigation.navigate('AdminScreen');
        // }else{
        //   navigation.navigate('Home');
        // }
      } else {
        Alert.alert("Error", "Thông tin không hợp lệ !");
      }
    });
  }

  return (
    <View style={styles.containerLoginScreen}>
      <ImageBackground
        source={require("../../assets/LaunchScreen/PremiumBG.png")}
        style={styles.imgBackground}
      />
      <View style={styles.titleScreen}>
        <Text
          style={{
            fontSize: 50,
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Login to Music Stream
        </Text>
      </View>

      <View style={{ width: "80%", margin: "auto", gap: 20 }}>
        <View>
          <Text style={styles.titleOnInput}>Email or username</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Input
            placeholder="name@domain.com"
            placeholderTextColor={"#BFC4C1"}
            inputStyle={styles.inputStyle}
            containerStyle={styles.containerInputStyle}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View>
          <Text style={styles.titleOnInput}>Password</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Input
            inputStyle={styles.inputStyle}
            containerStyle={{ width: "100%" }}
            onChangeText={(text) => setPassword(text)}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>
        {/* <Text>Warning</Text> */}
        <View style={{ marginTop: -25 }}>
          <Button
            title={"Log in"}
            titleStyle={styles.titleButtonStyle}
            buttonStyle={styles.buttonStyle}
            // onPress={() => router.push("/(tabs)/home")}
            onPress={handleSubmit}
          />
        </View>

        <View style={styles.footerText}>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={styles.textAsButton}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerText}>
          <Text style={{ color: "white" }}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/signup")}>
            {/* textDecorationLine: 'underline' */}
            <Text style={styles.textAsButton}> Sign up for Spotify</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
