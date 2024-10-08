import { defaultStyles } from "@/styles";
import { SafeAreaView, Text, View, FlatList, ScrollView } from "react-native";
import { Image, TouchableOpacity, Modal } from "react-native";
import { Button, Input, Tile } from "react-native-elements";

import Icon, { EvilIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import { Entypo } from "@expo/vector-icons";

import { useLocalSearchParams, useRouter } from "expo-router";

import { styles } from "./PersonalProfileStyle";

const dataAction = [
  {
    id: 1,
    title: "Tài khoản Premium",
    info: "Gói miễn phí",
    nameIcon: "star-outline",
  },
  {
    id: 2,
    title: "Tài khoản xu",
    info: "0 xu",
    nameIcon: "logo-bitcoin",
  },
  {
    id: 3,
    title: "Nhạc đã tải",
    info: "2024 bài hát",
    nameIcon: "download-outline",
  },
  {
    id: 4,
    title: "Gần đây",
    info: "99 bài hát",
    nameIcon: "reload",
  },
];

function PersonalProfile() {
  const renderItems = ({ item }) => (
    <Button
      title={
        <View style={{ gap: 5 }}>
          <Text style={styles.titleButtonCatagory}>{item.title}</Text>
          <Text style={styles.subTitleButtonCatagory}>{item.info}</Text>
        </View>
      }
      icon={<Ionicons name={item.nameIcon} size={30} color="black" />}
      buttonStyle={styles.buttonAction}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerProfile}>
        <Image
          source={require("../../../assets/User/Avata.png")}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <View>
          <Text style={styles.userName}>Nguyễn Nhựt Anh</Text>
          <View style={styles.containerFollow}>
            <View>
              <Text style={styles.numberFollow}>4</Text>
              <Text>Đang theo dõi</Text>
            </View>
            <View>
              <Text style={styles.numberFollow}>0</Text>
              <Text>Người theo dõi</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.containerAction}>
        <Button
          title={"Chỉnh sửa"}
          titleStyle={{ color: "black" }}
          buttonStyle={styles.buttonEdit}
        />
        <Octicons name="share" size={24} color="black" />
        <Entypo name="dots-three-horizontal" size={20} color="black" />
      </View>

      <View style={styles.containerCatagory}>
        <FlatList
          data={dataAction}
          renderItem={renderItems}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

export default PersonalProfile;
