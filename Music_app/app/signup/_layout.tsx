import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { StackScreenWithSeachBar } from "@/constants/layout";

const SignUp = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "signup",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="registerPassword"
          options={{
            headerTitle: "registerPassword",
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  );
};
export default SignUp;
