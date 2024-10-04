import { colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { SearchBarProps } from "react-native-screens";

const defaultSearchOptons: SearchBarProps = {
  tintColor: "cyan",
  hideWhenScrolling: false,
  textColor: colors.text,
};

export const useNavigationSearch = ({
  searchBarOptions,
}: {
  searchBarOptions?: SearchBarProps;
}) => {
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  const handleOnChangeText: SearchBarProps["onChangeText"] = ({
    nativeEvent: { text },
  }) => {
    setSearch(text);
  };
  useLayoutEffect(() => {
    // console.log("searchBarOptions", searchBarOptions);
    navigation.setOptions({
      headerSearchBarOptions: {
        ...defaultSearchOptons,
        ...searchBarOptions,
        onChangeText: handleOnChangeText,
      },
    });
  }, [navigation, searchBarOptions]);
  return search;
};
