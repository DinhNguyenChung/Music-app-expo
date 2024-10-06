import { defaultStyles, utilsStyles } from "@/styles";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
} from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Image, ScrollView } from "react-native";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";
const data = [
  {
    song: "FLOWER",
    artist: "Jessica Gonzales",
    img: require("../../../assets/library/Flower.png"),
    view: "2.1M",
    time: "3:36",
  },
  {
    song: "Shape of You",
    artist: "Anthony Taylor",
    img: require("../../../assets/library/Image 66.png"),
    view: "68M",
    time: "3:35",
  },
  {
    song: "Blinding Lights",
    artist: "Jessica Gonzales",
    img: require("../../../assets/library/BlindingLights.png"),
    view: "93M",
    time: "4:39",
  },
  {
    song: "Levitating",
    artist: "Jessica Gonzales",
    img: require("../../../assets/library/Levitating.png"),
    view: "9M",
    time: "7:48",
  },
  {
    song: "Astronaut in the Ocean",
    artist: "Jessica Gonzales",
    img: require("../../../assets/library/Astronaut.png"),
    view: "23M",
    time: "3:36",
  },
  {
    song: "Dynamite",
    artist: "Jessica Gonzales",
    img: require("../../../assets/library/Dynamite.png"),
    view: "10M",
    time: "6:22",
  },
];
const ItemDivider = () => (
  <View
    style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}
  />
);
type Song = {
  song: string;
  artist: string;
  img: any;
  view: string;
  time: string;
};

const renderItem = ({ item }: { item: Song }) => (
  <View>
    <TouchableOpacity style={styles.songItem}>
      <View>
        <Image source={item.img} style={styles.songImage} />
      </View>
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{item.song}</Text>
        <Text style={styles.songArtist}>{item.artist}</Text>
        <View style={styles.songDetails}>
          <Text style={styles.songViews}>
            <Icon
              name="play"
              type="font-awesome"
              size={12}
              color={"gray"}
              style={{ paddingRight: 5 }}
            />
            {item.view}
          </Text>

          <Text style={styles.songTime}>
            <Icon
              name="clock-o"
              type="font-awesome"
              size={12}
              color={"gray"}
              style={{ paddingLeft: 5, alignSelf: "center" }}
            />
            {item.time}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

const LibraryScreen = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <SafeAreaView
      style={{
        ...defaultStyles.container,
      }}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>Your Library</Text>
          <TouchableOpacity>
            <Ionicons name="search" size={24} />
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          // style={{ marginTop: 20 }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // paddingHorizontal: 20,
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={styles.tabHead}>
              <Text>Playlists</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabHead}>
              <Text>New tag</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabHead}>
              <Text>Songs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabHead}>
              <Text>Albums</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabHead}>
              <Text>Artists</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          ...styles.row,
          // flex: 1,
        }}
      >
        <View
          style={{
            ...styles.row,
            width: "100%",
            // backgroundColor: "rgba(0,0,0,0.5)",
            padding: 10,
            height: 80,
          }}
        >
          <View
            style={{
              ...styles.row,
              // backgroundColor: "rgba(111,111,111,0.5)",
              width: "80%",
              // height: 80,
            }}
          >
            <Image
              source={require("../../../assets/library/Image 85.png")}
              style={{
                width: 60,
                height: 60,
                alignSelf: "center",
              }}
            />
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 24, fontWeight: "800" }}>
                Mer Watson
              </Text>
              <View style={{ ...styles.row }}>
                <Icon
                  name="user"
                  type="font-awesome"
                  size={15}
                  color={"gray"}
                />
                <Text style={{ color: "gray" }}> 1.234K Followers</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "22%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: isFollowed ? "black" : "#EEEEEE",
                padding: 10,
                borderRadius: 10,
                // width: "100%",
              }}
              onPress={() => setIsFollowed(!isFollowed)}
            >
              <Text
                style={{
                  color: isFollowed ? "white" : "black",
                }}
              >
                {isFollowed ? "Followed" : "Follow"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, padding: 10 }}>
        <FlatList
          data={data}
          // scrollEnabled={false}
          // contentContainerStyle={{ paddingBottom: 128, paddingTop: 10 }}
          // ListFooterComponent={ItemDivider}
          // ItemSeparatorComponent={ItemDivider}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  tabHead: {
    backgroundColor: "#EEEEEE",
    // width: "18%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
  },
  songItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  songArtist: {
    color: "#666",
  },
  songDetails: {
    flexDirection: "row",
    // justifyContent: "space-between",

    marginTop: 5,
  },
  songViews: {
    color: "gray",
    alignSelf: "center",
  },
  songTime: {
    color: "gray",
    paddingHorizontal: 10,
  },
});
