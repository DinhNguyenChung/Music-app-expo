import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { StackScreenWithSeachBar } from "@/constants/layout";

const HomeScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            ...StackScreenWithSeachBar,
            headerTitle: "Home",
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  );
};
export default HomeScreenLayout;
