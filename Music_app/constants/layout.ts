import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { colors } from "./Colors";

export const StackScreenWithSeachBar: NativeStackNavigationOptions = {
  headerLargeTitle: false,
  headerTitle: "",
  headerLargeStyle: {
    backgroundColor: colors.background,
  },
  headerTitleStyle: {
    color: colors.text,
    // height: 0,
  },
  headerTintColor: colors.text,
  headerTransparent: false,
  headerShadowVisible: false,
  headerBlurEffect: "prominent",
  headerStyle: {
    backgroundColor: colors.background, // Giữ màu nền cho header nếu cần
  },
};
