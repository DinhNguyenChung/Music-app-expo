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

import Icon from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

/**
 * Màn hình đăng ký
 */

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handlePressRegisterPassword = () => {
    console.log("Email: ", email);
    if (!validateForm()) {
      Alert.alert("Lỗi", "Vui lòng nhập địa chỉ email hợp lệ");
      return;
    }
    router.push(`/signup/registerPassword?email=${encodeURIComponent(email)}`);
  };
  const validateForm = () => {
    // Kiểm tra Email
    // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email || !emailRegex.test(email)) {
      Alert.alert("Lỗi", "Vui lòng nhập địa chỉ email hợp lệ");
      return false;
    }
    return true;
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ImageBackground
        source={require("../../assets/LaunchScreen/PremiumBG.png")}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />
      <View style={{ width: 280, paddingTop: 150 }}>
        <Text
          style={{
            fontSize: 40,
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
            Email address
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Input
            placeholder="name@domain.com"
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
            onChangeText={(text) => setEmail(text)}
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
            onPress={() => handlePressRegisterPassword()}
          />
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", color: "white" }}
          >
            or
          </Text>
        </View>

        <View style={{ gap: 20, alignContent: "center" }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100%",
              height: 50,
              borderRadius: 25,
              borderColor: "#BFC4C1",
              borderWidth: 1,
              paddingLeft: 30,
              paddingRight: 30,
            }}
          >
            <View>
              <AntDesign name="google" size={24} color="white" />
            </View>
            <View>
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Sign up with Google
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100%",
              height: 50,
              borderRadius: 25,
              borderColor: "#BFC4C1",
              borderWidth: 1,
              paddingLeft: 30,
              paddingRight: 30,
            }}
          >
            <View>
              <AntDesign name="facebook-square" size={24} color="white" />
            </View>
            <View>
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Sign up with Facebook
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              width: "100%",
              height: 50,
              borderRadius: 25,
              borderColor: "#BFC4C1",
              borderWidth: 1,
              paddingLeft: 30,
              paddingRight: 30,
            }}
          >
            <View>
              <AntDesign name="apple1" size={24} color="white" />
            </View>
            <View>
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Sign up with Apple
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* <View style={{gap: 20}}>
                <Button
                    icon={{
                        name: 'google',
                        type: 'font-awesome',
                        color: 'white'
                    }}
                    iconContainerStyle={{marginRight: 10}}
                    title={"Sign up with Google"}
                    titleStyle={{fontWeight: 'bold', fontSize: 20, color: 'white'}}
                    type="clear"
                    buttonStyle={{width: '100%', height: 50, borderRadius: 25, borderColor: '#BFC4C1', borderWidth: 1}}
                />
                <Button
                    icon={{
                        name: 'facebook',
                        type: 'font-awesome',
                        color: 'white'
                    }}
                    iconContainerStyle={{marginRight: 10}}
                    title={"Sign up with Facebook"}
                    titleStyle={{fontWeight: 'bold', fontSize: 20, color: 'white'}}
                    type="clear"
                    buttonStyle={{width: '100%', height: 50, borderRadius: 25, borderColor: '#BFC4C1', borderWidth: 1}}
                />
                <Button
                    icon={{
                        name: 'apple',
                        type: 'font-awesome',
                        color: 'white'
                    }}
                    iconContainerStyle={{marginRight: 10}}
                    title={"Sign up with Apple"}
                    titleStyle={{fontWeight: 'bold', fontSize: 20, color: 'white'}}
                    buttonStyle={{width: '100%', height: 50, borderRadius: 25, borderColor: '#BFC4C1', borderWidth: 1}}
                    type="clear"
                />
            </View> */}

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ color: "white" }}>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {" "}
              Log in here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
