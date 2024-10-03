import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { StackScreenWithSeachBar } from "@/constants/layout";

const RegisterPassword = () => {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen
                    name="index"
                    options={{
                        headerTitle: "registerPassword",
                        headerShown: false,
                    }}
                />
            </Stack>
        </View>
    );
}

export default RegisterPassword;