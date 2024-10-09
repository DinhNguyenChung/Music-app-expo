import { defaultStyles } from "@/styles";
import { router, Stack } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { StackScreenWithSeachBar } from "@/constants/layout";
import { Icon } from "react-native-elements";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const LibraryScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            ...StackScreenWithSeachBar,
            headerTitle: "Library",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Playlist"
          options={{
            ...StackScreenWithSeachBar,
            headerTitle: "Playlists",
            // headerShown: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="chevron-back" size={27} />
              </TouchableOpacity>
            ),
            headerRight: () => <MaterialIcons name="cast" size={27} />,
          }}
        />
      </Stack>
    </View>
  );
};
export default LibraryScreenLayout;
