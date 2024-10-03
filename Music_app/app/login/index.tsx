import { colors, fontSize } from "@/constants/Colors";
import { defaultStyles } from "@/styles";
import { useRouter } from "expo-router";
import { useReducer } from "react";
import { ImageBackground, SafeAreaView, Text, View, TouchableOpacity, Image } from "react-native";
import { Button, Input } from "react-native-elements";

/**
 * MÀN HÌNH ĐĂNG NHẬP dành cho người đã có tài khoản
 * @param Email - tài khoản người dùng
 * @param Password - mật khẩu người dùng
 * @returns Đăng nhập thành công sẽ chuyển vào trang chủ
 */

const LoginScreen = () => {
    const router = useRouter();
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <ImageBackground
                source={require("../../assets/LaunchScreen/PremiumBG.png")}
                style={{width: '100%', height: '100%', position: 'absolute'}}
            />
            <View style={{width: 260, paddingTop: 200 }}>
                <Text style={{fontSize: 50, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>
                    Login to Music Stream
                </Text>
            </View>

            <View style={{width: '80%', margin: 'auto', gap: 20}}>
                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>Email or username</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Input
                        placeholder="name@domain.com"
                        placeholderTextColor={'#BFC4C1'}
                        inputStyle={{borderWidth: 1, borderRadius: 5, height: 50, padding: 10, borderColor: 'white'}}
                        containerStyle={{width: '100%', marginBottom: -20}}
                    />                
                </View>
                <View>
                    <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>Password</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Input
                        inputStyle={{borderWidth: 1, borderRadius: 5, height: 50, padding: 10, borderColor: 'white'}}
                        containerStyle={{width: '100%'}}
                    />                
                </View>
                {/* <Text>Warning</Text> */}
                <View style={{marginTop: -25}}>
                    <Button
                        title={"Log in"}
                        titleStyle={{fontWeight: 'bold', fontSize: 20, color: 'black'}}
                        buttonStyle={{backgroundColor: '#3BE477', width: '100%', height: 50, borderRadius: 25}}
                        onPress={() => router.push("/(tabs)/home")}
                    />
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <TouchableOpacity
                        onPress={() => router.push("login")}>
                        <Text style={{color: 'white', fontWeight: 'bold' }}>Forgot your password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{color: 'white' }}>Don't have an account?</Text>
                    <TouchableOpacity
                        onPress={() => router.push("signup")}>
                        {/* textDecorationLine: 'underline' */}
                        <Text style={{color: 'white', fontWeight: 'bold', }}> Sign up for Spotify</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;
