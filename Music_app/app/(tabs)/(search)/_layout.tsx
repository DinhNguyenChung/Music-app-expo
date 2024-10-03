import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { StackScreenWithSeachBar } from "@/constants/layout";

const SearchScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            ...StackScreenWithSeachBar,
            // headerTitle: "",

            // headerTitleAlign: "center",
            headerStyle: {
              // height: 50,
            } as React.CSSProperties,
          }}
        />
      </Stack>
    </View>
  );
};
export default SearchScreenLayout;
