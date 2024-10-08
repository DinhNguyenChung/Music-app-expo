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
import { Button, Input } from "react-native-elements";

import { styles } from "./LoginStyle";

/**
 * MÀN HÌNH ĐĂNG NHẬP dành cho người đã có tài khoản
 * @param Email - tài khoản người dùng
 * @param Password - mật khẩu người dùng
 * @returns Đăng nhập thành công sẽ chuyển vào trang chủ
 */

const LoginScreen = () => {
  const router = useRouter();
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
          />
        </View>
        <View>
          <Text style={styles.titleOnInput}>Password</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Input
            inputStyle={styles.inputStyle}
            containerStyle={{ width: "100%" }}
          />
        </View>
        {/* <Text>Warning</Text> */}
        <View style={{ marginTop: -25 }}>
          <Button
            title={"Log in"}
            titleStyle={styles.titleButtonStyle}
            buttonStyle={styles.buttonStyle}
            onPress={() => router.push("/(tabs)/home")}
          />
        </View>

        <View style={styles.footerText}>
          <TouchableOpacity onPress={() => router.push("login")}>
            <Text style={styles.textAsButton}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerText}>
          <Text style={{ color: "white" }}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.push("signup")}>
            {/* textDecorationLine: 'underline' */}
            <Text style={styles.textAsButton}> Sign up for Spotify</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
