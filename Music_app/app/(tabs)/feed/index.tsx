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
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { useRouter, useLocalSearchParams } from "expo-router";
import { useState } from "react";

const dataComment = [
  {
    id: 1,
    user: {
      name: "Sally Rooney",
      avatar: require("../../../assets/Feed/Avatar 8.png"),
    },
    comment: "Do duis cul",
    timestamp: "17h",
    likes: 1,
    replies: [],
  },
  {
    id: 2,
    user: {
      name: "Jason",
      avatar: require("../../../assets/Feed/Avatar 9.png"),
    },
    comment: "Minim magna exc",
    timestamp: "48m",
    likes: 1,
    replies: [
      {
        id: 3,
        user: {
          name: "Michael Key",
          avatar: require("../../../assets/Feed/Avatar 9.png"),
        },
        comment: "@Jason Smith Deserunt officia consectetur adipi",
        timestamp: "40m",
        likes: 2,
        replies: [],
      },
    ],
  },
  {
    id: 3,
    user: {
      name: "Michael Key",
      avatar: require("../../../assets/Feed/Avatar 9.png"),
    },
    comment: "@Jason Smith Deserunt officia consectetur adipi",
    timestamp: "40m",
    likes: 2,
    replies: [
      {
        id: 4,
        user: {
          name: "Kiran Glaucus",
          avatar: require("../../../assets/Feed/Avatar 9.png"),
        },
        comment: "Esse consequat cillum ex",
        timestamp: "40m",
        likes: 2,
        replies: [],
      },
    ],
  },
  {
    id: 5,
    user: {
      name: "Liam Pham",
      avatar: require("../../../assets/Feed/Avatar 9.png"),
    },
    comment: "Commodo",
    timestamp: "48m",
    likes: 1,
    replies: [],
  },
];
const dataFeed = [
  {
    id: 1,
    artists: "Jessica Gonzalez",
    song: "FLOWER",
    description: "Poster a track",
    date: "2 days ago",
    avtPath: require("../../../assets/Feed/Avatar 4.png"),
    imgPath: require("../../../assets/Feed/Image 93.png"),
    view: 125,
    like: 25,
    duration: "05:15",
    comment: 3,
    share: 1,
  },
  {
    id: 2,
    artists: "William King",
    song: "ME",
    description: "Poster a track",
    date: "5 days ago",
    avtPath: require("../../../assets/Feed/Avatar 5.png"),
    imgPath: require("../../../assets/Feed/Image 94.png"),
    view: 125,
    like: 25,
    duration: "05:15",
    comment: 3,
    share: 1,
  },
];

const FeedScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModalComment = () => {
    setModalVisible(!isModalVisible);
  };
  const renderComment = ({ item }) => (
    <View style={{ flexDirection: "row", paddingVertical: 10 }}>
      <Image
        source={item.user.avatar}
        style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
      />
      <View>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold" }}>{item.user.name}</Text>
          <Text>{item.comment}</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Text style={{ marginRight: 10 }}>{item.timestamp}</Text>
          <TouchableOpacity>
            <Text style={{ marginRight: 10 }}>{item.likes} like</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Reply</Text>
          </TouchableOpacity>
        </View>

        {/* Hiển thị replies nếu có */}
        {item.replies.length > 0 && (
          <FlatList
            data={item.replies}
            keyExtractor={(reply) => reply.id.toString()}
            renderItem={({ item: reply }) => (
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Image
                  source={reply.user.avatar}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    marginRight: 10,
                  }}
                />
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "bold" }}>
                      {reply.user.name}
                    </Text>
                    <Text>{reply.comment}</Text>
                  </View>
                  <View style={{ flexDirection: "row", marginTop: 5 }}>
                    <Text style={{ marginRight: 10 }}>{reply.timestamp}</Text>
                    <TouchableOpacity>
                      <Text style={{ marginRight: 10 }}>
                        {reply.likes} like
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Text>Reply</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
  const renderFeed = ({ item }) => (
    <View style={{ margin: 20, overflow: "hidden", gap: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Image source={item.avtPath} style={{ width: 35, height: 35 }} />
        <View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              {item.artists}
            </Text>
            <AntDesign name="checkcircleo" size={13} color="blue" />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
            <Text>{item.description}</Text>
            <Entypo name="dot-single" size={20} color="gray" />
            <Text>{item.date}</Text>
          </View>
        </View>
      </View>

      <View style={{ width: 375, height: 375, justifyContent: "flex-end" }}>
        <ImageBackground
          source={item.imgPath}
          style={{ position: "absolute", height: 375, width: 375 }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            padding: 20,
            height: 100,
          }}
        >
          <View style={{ gap: 5 }}>
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
              {item.song}
            </Text>
            <Text style={{ fontSize: 18, color: "white" }}>{item.artists}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Ionicons name="play-outline" size={15} color="white" />
            <Text style={{ color: "white" }}>{item.view}</Text>
            <Entypo name="dot-single" size={20} color="white" />
            <Text style={{ color: "white" }}>{item.duration}</Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        {/*  */}
        <TouchableOpacity>
          <AntDesign name="hearto" size={20} color="black" />
        </TouchableOpacity>
        <Text style={{ paddingRight: 20 }}>{item.like}</Text>
        {/*  */}
        <TouchableOpacity onPress={toggleModalComment}>
          <FontAwesome5 name="comment-dots" size={20} color="black" />
        </TouchableOpacity>
        <Text style={{ paddingRight: 20 }}>{item.comment}</Text>
        {/*  */}
        <TouchableOpacity>
          <AntDesign name="sharealt" size={20} color="black" />
        </TouchableOpacity>
        <Text>{item.share}</Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <FlatList
        data={dataFeed}
        renderItem={renderFeed}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 50 }}
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={toggleModalComment}
        transparent={true}
        animationType="slide"
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              maxHeight: "80%",
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
              >
                3 comments
              </Text>
              <TouchableOpacity onPress={toggleModalComment}>
                <AntDesign name="down" size={24} color="gray" />
              </TouchableOpacity>
            </View>

            <FlatList
              data={dataComment}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderComment}
              showsVerticalScrollIndicator={false}
            />
            <View
              style={{
                paddingBottom: 20,
                paddingTop: 20,
                flexDirection: "row",
                gap: 10,
              }}
            >
              <Image source={require("../../../assets/Feed/Avatar 13.png")} />
              <Input
                rightIcon={
                  <MaterialIcons name="emoji-emotions" size={24} color="gray" />
                }
                placeholder="Write a comment..."
                inputContainerStyle={{
                  marginBottom: -25,
                  borderBottomWidth: 0,
                }}
                containerStyle={{
                  height: 50,
                  width: 320,
                  borderWidth: 1,
                  borderColor: "gray",
                  borderRadius: 25,
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default FeedScreen;
