import { MaterialIcons } from "@expo/vector-icons";
import { Image, TouchableOpacity } from "react-native";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import { View } from "react-native";
const data = [
  {
    id: 1,
    name: "ipsum sit nulla",
    image: require("@/assets/library/Flower.png"),
    artist: "Ashley scott",
    songs: [
      {
        id: 1,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
      {
        id: 2,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
      {
        id: 3,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
      {
        id: 4,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
      {
        id: 5,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
      {
        id: 6,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
      {
        id: 7,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
      {
        id: 8,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
      {
        id: 9,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
      {
        id: 10,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
      {
        id: 11,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
      {
        id: 12,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
    ],
  },
  {
    id: 2,
    name: "Occaecat cupidatat",
    image: require("@/assets/library/Dynamite.png"),
    artist: "Ashley scott",
    songs: [
      {
        id: 1,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
      {
        id: 2,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
      {
        id: 3,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
      {
        id: 4,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
      {
        id: 5,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
      {
        id: 6,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
      {
        id: 7,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
      {
        id: 8,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
      {
        id: 9,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
      {
        id: 10,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
      {
        id: 11,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
      {
        id: 12,
        title: "ipsum sit nulla",
        artist: "Ashley scott",
        time: "3:36",
        view: "2.1M",
        img: "https://picsum",
      },
    ],
  },
];
const Playlist = () => {
  return (
    <SafeAreaView
      style={{
        justifyContent: "space-between",
        // backgroundColor: "gray",
        height: "85%",
      }}
    >
      <View style={{ ...styles.containerTitle }}>
        <Text style={styles.title}>Your playlists</Text>
        <ScrollView>
          {data.map((item) => (
            <View
              key={item.id}
              style={{
                ...styles.containerItem,
                justifyContent: "space-between",
              }}
            >
              <View style={{ ...styles.containerItem }}>
                <Image source={item.image} style={{ width: 50, height: 50 }} />
                <View
                  style={{
                    paddingHorizontal: 5,
                    // backgroundColor: "gray",
                    width: "70%",
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "500" }}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <Text>{item.artist}</Text>
                    <Text>{item.songs.length} songs</Text>
                  </View>
                </View>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity>
                  <MaterialIcons
                    name="arrow-forward-ios"
                    size={26}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{ justifyContent: "flex-end" }}>
        <TouchableOpacity
          style={{
            // backgroundColor: "gray",

            alignItems: "flex-end",
            paddingHorizontal: 20,
          }}
        >
          <MaterialIcons name="add-circle" size={55} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Playlist;

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: "row",
    // alignItems: "center",
    // padding: 20,
    // borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 15,
    // paddingHorizontal: 10,
    // width: "100%",
  },
  containerTitle: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 25,
    color: "black",
    fontWeight: "bold",
    marginBottom: 20,
  },
});
