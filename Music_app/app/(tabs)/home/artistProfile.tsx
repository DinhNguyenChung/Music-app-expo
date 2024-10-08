import { defaultStyles } from "@/styles";
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  ScrollView,
  ImageBackground,
  requireNativeComponent,
} from "react-native";
import { Image, TouchableOpacity, Modal } from "react-native";
import { Button, Input } from "react-native-elements";

import Icon from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useRouter, useLocalSearchParams } from "expo-router";
import { useState } from "react";

import { styles } from "./ArtisProfileStyle";
import dataPopular from "../../../assets/data/popularList.json";

const getImageSource = (imageName) => {
  switch (imageName) {
    case "Flower":
      return require("../../../assets/DetailsChart/Flower.png");
    case "ShapeOfYou":
      return require("../../../assets/DetailsChart/ShapeOfYou.png");
    case "BlindingLights":
      return require("../../../assets/DetailsChart/BlindingLights.png");
    case "Levitating":
      return require("../../../assets/DetailsChart/Levitating.png");
    case "Levitating":
      return require("../../../assets/DetailsChart/ShapeOfYou.png");
    case "Astronaut":
      return require("../../../assets/DetailsChart/Astronaut.png");
    case "Dynamite":
      return require("../../../assets/DetailsChart/Dynamite.png");
    // default:
    //     return require("../../../assets/DetailsChart/Flower.png");
  }
};
const dataAlbum = [
  {
    id: 1,
    title: "ME",
    artists: "Jessica Gonzalez",
    img: require("../../../assets/Home/Album1.png"),
  },
  {
    id: 2,
    title: "Magna nost",
    artists: "Brian Thomas",
    img: require("../../../assets/Home/Album2.png"),
  },
  {
    id: 3,
    title: "Magna nost",
    artists: "Christoper",
    img: require("../../../assets/Home/Album3.png"),
  },
];
const dataFansAlsoLike = [
  {
    id: 1,
    title: "Magna nost",
    artists: "Jessica Gonzalez",
    img: require("../../../assets/ArtistProfile/Image 74.png"),
  },
  {
    id: 2,
    title: "Exercitatio",
    artists: "Brian Harris",
    img: require("../../../assets/ArtistProfile/Image 75.png"),
  },
  {
    id: 3,
    title: "Tempor nost",
    artists: "Tyler Gonzalez",
    img: require("../../../assets/ArtistProfile/Image 76.png"),
  },
];

const ArtistProfile = () => {
  const { id, singer, img } = useLocalSearchParams();
  const router = useRouter();
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(true);
  const handlePress = (item) => {
    setCurrentSong(item);
    setIsPlaying(true);
    toggleFullScreen();
  };
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: 15,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => handlePress(item)}
        >
          <View>
            <Image
              source={getImageSource(item.img)}
              style={{
                width: 65,
                height: 65,
                borderRadius: 5,
                marginRight: 10,
              }}
            />
          </View>
          <View style={{ gap: 5 }}>
            <Text style={{ fontSize: 20 }}>{item.title}</Text>
            <Text style={{ fontSize: 15 }}>{singer}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
                justifyContent: "space-between",
                width: 100,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign name="hearto" size={12} color="black" />
                <Text style={{ marginLeft: 5 }}>{item.view}</Text>
              </View>
              <Text style={{ alignSelf: "center" }}>{item.time}</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View>
          <Entypo name="dots-three-horizontal" size={20} color="black" />
        </View>
      </View>
    );
  };
  const render = ({ item }) => (
    <TouchableOpacity>
      <Image
        source={item.img}
        style={{ width: 140, height: 140, borderRadius: 10, marginRight: 20 }}
      />
      <Text style={{ fontSize: 17, marginTop: 5, width: 140 }}>
        {item.title}
      </Text>
      <Text style={{ fontSize: 17, marginTop: 5, width: 140, opacity: 0.5 }}>
        {item.artists}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerArtist}>
        <Image source={img} style={styles.avataArtist} />
        <Text style={styles.nameArtist}>{singer}</Text>
        <Text>65.1K Followers</Text>
      </View>

      <View style={styles.containerContent}>
        <View style={styles.containerAction}>
          <Button
            title="Follow"
            titleStyle={{ color: "blue" }}
            buttonStyle={styles.buttonFollow}
          />
          <TouchableOpacity>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.containerAction}>
          <TouchableOpacity>
            <FontAwesome name="random" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="play" size={50} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {/* Danh sách nhạc được nghe nhiều nhất */}
        <View style={styles.containerCategory}>
          <Text style={styles.titleCategory}>Popular</Text>
          <FlatList
            data={dataPopular}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal={false}
            showsVerticalScrollIndicator={false}
          />
        </View>
        {/* Mục Albums */}
        <View style={styles.containerCategory}>
          <Text style={styles.titleCategory}>Albums</Text>
          <FlatList
            data={dataAlbum}
            renderItem={render}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{ paddingBottom: 30 }}
          />
        </View>
        {/* About */}
        <View style={styles.containerCategory}>
          <Text style={styles.titleCategory}>About</Text>
          <Image
            source={require("../../../assets/ArtistProfile/About.png")}
            style={{ width: "100%", height: 200, borderRadius: 5 }}
          />
          <Text
            style={{
              textAlign: "justify",
              fontSize: 18,
              color: "#8F8686",
              paddingTop: 10,
            }}
          >
            Do in cupidatat aute et in officia aute laboris est Lorem est nisi
            dolor consequat voluptate duis irure. Veniam quis amet irure cillum
            elit aliquip sunt cillum cillum do aliqua voluptate ad non magna
            elit. Do ea natur laborum ipsum mollit excepteur in tempor
            incididunt. Exercitation cillum sint aliqua qui do deserunt. Quis
            magna minim in cupidatat occaecat aute culpa nisi. Voluptate non
            esse qui in dolore id est sunt cillum veniam. Eu voluptate ex aliqua
            nostrud qui consequat anim. Excepteur eiusmod fugiat tempor
            exercitation reprehenderit irure magna labore officia. Ullamco
            cupidatat nisi sunt ut commodo deserunt est dolor sit aute
            incididunt occaecat. Laboris in enim aute anim fugiat non excepteur
            pariatur.
          </Text>
        </View>
        {/* Fans also like */}
        <View style={{ padding: 20, flex: 1 }}>
          <Text style={styles.titleCategory}>Fans also like</Text>
          <FlatList
            data={dataFansAlsoLike}
            renderItem={render}
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{ paddingBottom: 30 }}
          />
        </View>
      </ScrollView>
      {/* Thanh điều khiển nhạc nổi */}
      {isPlaying && currentSong && (
        <View
          style={{
            position: "absolute",
            bottom: 29, // Cách tabs một khoảng nhỏ
            left: 0,
            right: 0,
            height: isFullScreen ? "100%" : 70, // Chiều cao thay đổi dựa trên chế độ
            backgroundColor: "white",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 5,
          }}
        >
          {/* Thanh điều khiển nhỏ */}
          {!isFullScreen && (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: 10,
              }}
              onPress={toggleFullScreen}
            >
              <Image
                source={getImageSource(currentSong.img)}
                style={{ width: 50, height: 50, borderRadius: 5 }}
              />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {currentSong.title}
                </Text>
                <Text style={{ fontSize: 12, color: "gray" }}>
                  {currentSong.artist}
                </Text>
              </View>
              <TouchableOpacity onPress={() => setIsPlaying(false)}>
                <AntDesign name="pausecircle" size={40} color="black" />
              </TouchableOpacity>
            </TouchableOpacity>
          )}

          {/* Giao diện TOÀN MÀN HÌNH khi người dùng nhấn vào thanh nhỏ HOẶC nhấn vào bài hát bất kỳ */}
          {isFullScreen && (
            <SafeAreaView
              style={{ padding: 20, alignItems: "center", flex: 1 }}
            >
              <Text
                style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10 }}
              >
                {currentSong.title}
              </Text>
              <Text style={{ fontSize: 18, marginBottom: 20 }}>
                {currentSong.artist}
              </Text>
              <Image
                source={getImageSource(currentSong.img)}
                style={{ width: 300, height: 300, marginBottom: 20 }}
              />
              <Text>Thời lượng: {currentSong.time}</Text>
              <Button title="Thu nhỏ" onPress={toggleFullScreen} />
            </SafeAreaView>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default ArtistProfile;
