import { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const data = [
  {
    song: "FLOWER",
    artist: "Jessica Gonzales",
    img: require("../../assets/library/Flower.png"),
    view: "2.1M",
    time: "3:36",
    albumname: "Flower",
  },
  {
    song: "Shape of You",
    artist: "Anthony Taylor",
    img: require("../../assets/library/Image 66.png"),
    view: "68M",
    time: "3:35",
    albumname: "Shape of You",
  },
  {
    song: "Blinding Lights",
    artist: "Jessica Gonzales",
    img: require("../../assets/library/BlindingLights.png"),
    view: "93M",
    time: "4:39",
    albumname: "Flower",
  },
  {
    song: "Levitating",
    artist: "Jessica Gonzales",
    img: require("../../assets/library/Levitating.png"),
    view: "9M",
    time: "7:48",
    albumname: "Flower",
  },
  {
    song: "Astronaut in the Ocean",
    artist: "Jessica Gonzales",
    img: require("../../assets/library/Astronaut.png"),
    view: "23M",
    time: "3:36",
    albumname: "Flower",
  },
  {
    song: "Dynamite",
    artist: "Jessica Gonzales",
    img: require("../../assets/library/Dynamite.png"),
    view: "10M",
    time: "6:22",
    albumname: "Flower",
  },
];
export const ArtistsTabs = () => {
  const [displayedArtists, setDisplayedArtists] = useState<string[]>([]);

  // Tạo danh sách các nghệ sĩ duy nhất
  useEffect(() => {
    const uniqueArtists = Array.from(new Set(data.map((item) => item.artist)));
    setDisplayedArtists(uniqueArtists);
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ paddingVertical: 20 }}>
          {displayedArtists.map((artist, index) => {
            // Tìm bài hát đầu tiên của nghệ sĩ này
            const firstSongByArtist = data.find(
              (item) => item.artist === artist
            );

            // Đếm số bài hát của nghệ sĩ này
            const songCount = data.filter(
              (item) => item.artist === artist
            ).length;

            return (
              <TouchableOpacity>
                <View
                  key={index}
                  style={{ flexDirection: "row", paddingVertical: 10 }}
                >
                  {/* Hiển thị ảnh bài hát và thông tin nghệ sĩ */}
                  <Image
                    source={firstSongByArtist?.img}
                    style={{ width: 60, height: 60 }}
                  />
                  <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 19, fontWeight: "500" }}>
                      {firstSongByArtist?.artist}
                    </Text>
                    <Text>{songCount} bài hát</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
