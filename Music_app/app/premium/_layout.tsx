import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { StackScreenWithSeachBar } from "@/constants/layout";

const SubscribePremium = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "premium",
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  );
};
export default SubscribePremium;