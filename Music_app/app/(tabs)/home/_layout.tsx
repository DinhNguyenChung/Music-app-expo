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
            // ...StackScreenWithSeachBar,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="detailsChart"
          options={{
            headerTitle: '',
            headerBackTitle: 'Back',
            headerStyle: {backgroundColor: 'transparent'},
          }}
        />
        <Stack.Screen
          name="detailsTrending"
          options={{
            headerTitle: '',
            headerBackTitle: 'Back',
            headerStyle: {backgroundColor: 'transparent'},
          }}
        />    
        <Stack.Screen
          name="artistProfile"
          options={{
            headerTitle: '',
            headerBackTitle: 'Back',
            headerStyle: {backgroundColor: 'transparent'},
          }}
        />
      </Stack>
    </View>
  );
};
export default HomeScreenLayout;
