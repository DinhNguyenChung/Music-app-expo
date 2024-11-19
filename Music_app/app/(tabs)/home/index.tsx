import { defaultStyles } from "@/styles";
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  ScrollView,
  Modal,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import React, { useState, useRef } from "react";
import { Button, Input, Tile } from "react-native-elements";

import Icon from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";

import { useRouter } from "expo-router";

import { styles } from "./HomeStyle";

const userName = "Nguyễn Nhựt Anh";

const dataSuggestions = [
  {
    id: 1,
    img: require("../../../assets/Home/suggestions1.png"),
  },
  {
    id: 2,
    img: require("../../../assets/Home/suggestions2.png"),
  },
];
const dataCharts = [
  {
    id: 1,
    name: "Top 50 Canada",
    title: "Daily chart - toppers update",
    imgPath: require("../../../assets/Home/Chart1.png"),
  },
  {
    id: 2,
    name: "Top 50 Global",
    title: "Daily chart - toppers update",
    imgPath: require("../../../assets/Home/Chart2.png"),
  },
  {
    id: 3,
    name: "Top 50 Trending",
    title: "Daily chart - toppers update",
    imgPath: require("../../../assets/Home/Chart3.png"),
  },
];
const dataAlbum = [
  {
    id: 1,
    title: "ME",
    singer: "Jessica Gonzalez",
    img: require("../../../assets/Home/Album1.png"),
  },
  {
    id: 2,
    title: "Magna nost",
    singer: "Brian Thomas",
    img: require("../../../assets/Home/Album2.png"),
  },
  {
    id: 3,
    title: "Magna nost",
    singer: "Christoper",
    img: require("../../../assets/Home/Album3.png"),
  },
];
const dataArtists = [
  {
    id: 1,
    singer: "Jennifer Wilson",
    img: require("../../../assets/Home/Artists1.png"),
  },
  {
    id: 2,
    singer: "Elizabeth Hall",
    img: require("../../../assets/Home/Artists2.png"),
  },
  {
    id: 3,
    singer: "Anthonio",
    img: require("../../../assets/Home/Artists3.png"),
  },
];
const dataButtonMenu = [
  {
    id: 1,
    title: "Thông tin cá nhân",
    nameIcon: "person-outline",
  },
  {
    id: 2,
    title: "Thêm tài khoản",
    nameIcon: "add-outline",
  },
  {
    id: 3,
    title: "Nội dung mới",
    nameIcon: "newspaper-outline",
  },
  {
    id: 4,
    title: "Nội dung đã nghe gần đây",
    nameIcon: "refresh-outline",
  },
  {
    id: 5,
    title: "Cài đặt và quyền riêng tư",
    nameIcon: "settings-outline",
  },
  {
    id: 6,
    title: "Đăng xuất",
    nameIcon: "log-out-outline",
  },
];
const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const router = useRouter();
  const [isModalMenuVisible, setIsModalMenuVisible] = useState(false);
  const slideAnim = useRef(
    new Animated.Value(Dimensions.get("window").width)
  ).current;

  const handleLogout = () => {
    setIsModalMenuVisible(false);
    router.push("/login");
  };

  // Các toggle
  const toggleModalMenu = () => {
    if (isModalMenuVisible) {
      // Nếu modal đang mở, trượt ra khỏi màn hình
      Animated.timing(slideAnim, {
        toValue: Dimensions.get("window").width, // Trượt ra ngoài
        duration: 200,
        useNativeDriver: true,
      }).start(() => setIsModalMenuVisible(false)); // Đặt modalVisible thành false sau khi animation hoàn thành
    } else {
      setIsModalMenuVisible(true); // Hiển thị modal
      Animated.timing(slideAnim, {
        toValue: 0, // Trượt vào từ phải
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  // Các handlePress
  const handlePressChart = (id, name, title, imgPath) => {
    console.log(id, title);
    router.push({
      pathname: "/home/detailsChart",
      params: { id, title, name, imgPath },
    });
  };
  const handlePressPremium = () => {
    router.push("/premium");
  };
  const handlePressTrending = () => {};
  const handlePressPersonalInfo = () => {
    router.push("/home/personalInfo");
    setIsModalMenuVisible(false);
  };
  const handlePressPersonalProfile = (userName) => {
    router.push({
      pathname: "/home/personalProfile",
      params: { userName },
    });
    setIsModalMenuVisible(false);
  };

  // Các render
  const renderSuggesstions = ({ item }) => (
    <View>
      <Image source={item.img} style={styles.renderImgSuggestion} />
    </View>
  );
  const handlePressArtist = (id, singer, img) => {
    console.log(id, singer);
    router.push({
      pathname: "/home/artistProfile",
      params: { id, singer, img },
    });
  };
  const renderCharts = ({ item }) => (
    <View>
      <TouchableOpacity
        onPress={() =>
          handlePressChart(item.id, item.name, item.title, item.imgPath)
        }
      >
        <Image source={item.imgPath} style={styles.renderImg} />
        <Text style={styles.subTitleRender}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
  const renderAlbum = ({ item }) => (
    <TouchableOpacity>
      <Image source={item.img} style={styles.renderImg} />
      <Text style={styles.titleRender}>{item.title}</Text>
      <Text style={styles.subTitleRender}>{item.singer}</Text>
    </TouchableOpacity>
  );
  const renderArtists = ({ item }) => (
    <View style={styles.containerRenderArtists}>
      <TouchableOpacity
        onPress={() => handlePressArtist(item.id, item.singer, item.img)}
      >
        <Image
          source={item.img}
          style={{ width: 140, height: 140, borderRadius: 10 }}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 17, marginTop: 10 }}>{item.singer}</Text>
      <Button
        title={"Follow"}
        titleStyle={{ fontSize: 15, fontWeight: "bold" }}
        buttonStyle={styles.buttonFollow}
      />
    </View>
  );
  const renderlistActionMenu = ({ item }) => (
    <Button
      title={item.title}
      icon={<Ionicons name={item.nameIcon} size={24} color="black" />}
      titleStyle={styles.titleButtonMenu}
      buttonStyle={styles.buttonActionMenu}
      containerStyle={styles.containerButtonMenu}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      {/* Tiêu đề */}
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={handlePressPremium}>
          <View>
            <Image source={require("../../../assets/Home/IconColor.png")} />
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
          {/* Ở đây hiển thị các thông báo */}
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={30} color="black" />
          </TouchableOpacity>
          {/* Khi click vào avata này sẽ hiển thị menu các chức năng */}
          <TouchableOpacity onPress={toggleModalMenu}>
            <Image
              source={require("../../../assets/User/Avata.png")}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Good morning!! */}
      <View>
        <Text style={{ fontSize: 20, marginTop: 40, color: "#767D88" }}>
          Good morning,
        </Text>
        <Text style={styles.textUserName}>{userName}</Text>
      </View>

      {/* Thanh tìm kiếm bài hát */}
      <View style={{}}>
        <Input
          leftIcon={<Ionicons name="search" size={24} color="black" />}
          placeholder="What you want to listen to"
          containerStyle={styles.containerSearch}
          inputContainerStyle={styles.inputContainerSearch}
        />
      </View>

      {/* Phần nội dung sẽ được kéo */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/*  */}
        {/* Suggestions for you */}
        <View>
          <Text style={styles.titleCatagory}>Suggestions for you</Text>
          <FlatList
            data={dataSuggestions}
            renderItem={renderSuggesstions}
            keyExtractor={(sugesstion) => sugesstion.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Charts */}
        <View>
          <View style={styles.headerCatagory}>
            <Text style={styles.titleCatagory}>Charts</Text>
            <TouchableOpacity>
              <Text style={{ opacity: 0.5, fontWeight: "bold" }}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={dataCharts}
            renderItem={renderCharts}
            keyExtractor={(chart) => chart.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* Trending albums */}
        <View>
          <View style={styles.headerCatagory}>
            <Text style={styles.titleCatagory}>Trending albums</Text>
            <TouchableOpacity>
              <Text style={styles.textSeeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={dataAlbum}
            renderItem={renderAlbum}
            keyExtractor={(albums) => albums.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* Popular artists */}
        <View style={{ paddingBottom: 50 }}>
          <View style={styles.headerCatagory}>
            <Text style={styles.titleCatagory}>Popular artists</Text>
            <TouchableOpacity>
              <Text style={styles.textSeeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={dataArtists}
            renderItem={renderArtists}
            keyExtractor={(chart) => chart.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      <Modal
        visible={isModalMenuVisible}
        transparent={true}
        onRequestClose={toggleModalMenu}
      >
        <TouchableOpacity onPress={toggleModalMenu} style={styles.modalOverlay}>
          <Animated.View
            style={[
              styles.modalMenuContainer,
              { transform: [{ translateX: slideAnim }] },
            ]}
          >
            <View style={styles.headerMenu}>
              <Image
                source={require("../../../assets/User/Avata.png")}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
              <View style={{ gap: 3 }}>
                <Text style={styles.usernameOnMenu}>{userName}</Text>
                <TouchableOpacity onPress={handlePressPersonalProfile}>
                  <Text style={{ opacity: 0.5 }}>Xem hồ sơ</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.listAction}>
              {/* <FlatList
                data={dataButtonMenu}
                renderItem={renderlistActionMenu}
                keyExtractor={(item) => item.id.toString()}
              /> */}
              <Button
                title={"Thông tin cá nhân"}
                icon={
                  <Ionicons name="person-outline" size={24} color="black" />
                }
                titleStyle={styles.titleButtonMenu}
                buttonStyle={styles.buttonActionMenu}
                containerStyle={styles.containerButtonMenu}
                onPress={handlePressPersonalInfo}
              />
              <Button
                title={"Thêm tài khoản khác"}
                icon={<Ionicons name="add-outline" size={24} color="black" />}
                titleStyle={styles.titleButtonMenu}
                buttonStyle={styles.buttonActionMenu}
                containerStyle={styles.containerButtonMenu}
              />
              <Button
                title={"Nội dung mới"}
                icon={
                  <Ionicons name="newspaper-outline" size={24} color="black" />
                }
                titleStyle={styles.titleButtonMenu}
                buttonStyle={styles.buttonActionMenu}
                containerStyle={styles.containerButtonMenu}
              />
              <Button
                title={"Nội dung đã nghe gần đây"}
                icon={
                  <Ionicons name="refresh-outline" size={24} color="black" />
                }
                titleStyle={styles.titleButtonMenu}
                buttonStyle={styles.buttonActionMenu}
                containerStyle={styles.containerButtonMenu}
              />
              <Button
                title={"Cài đặt và quyền riêng tư"}
                icon={
                  <Ionicons name="settings-outline" size={24} color="black" />
                }
                titleStyle={styles.titleButtonMenu}
                buttonStyle={styles.buttonActionMenu}
                containerStyle={styles.containerButtonMenu}
              />
              <Button
                title={"Đăng xuất"}
                icon={
                  <Ionicons name="log-out-outline" size={24} color="black" />
                }
                titleStyle={styles.titleButtonMenu}
                buttonStyle={styles.buttonActionMenu}
                containerStyle={styles.containerButtonMenu}
                onPress={() => handleLogout()}
              />
            </View>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default HomeScreen;
