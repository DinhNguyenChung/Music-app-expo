import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { StackScreenWithSeachBar } from "@/constants/layout";

const Login = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "login",
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  );
};
export default Login;